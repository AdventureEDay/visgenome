var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const zlib = require('zlib');
const monodna = require('../public/properties/monodna');
const didna = require('../public/properties/didna');
const tridna = require('../public/properties/tridna');

// 前端传参数过来
router.post("/", function (req, res, next) {
    let timeNow = Date.now();
    let imgName = timeNow + ".png"; // 在这里使用circos生成图片，图片名称使用Date.now()时间命名
    let genome = req.body.genome; // genome表示的是哪一种基因组 hg38 mm39 saccer3
    // 在genome对应的文件夹下创建一个以时间命名的文件夹, 核型文件，数据文件以及生成的图像都保存在这个文件夹下
    let dir = path.join(__dirname, "../public/circos/", genome) + "/" + timeNow;
    fs.mkdirSync(dir); // 同步创建文件夹
    let formData = req.body.formData; // 接收前端传过来的参数, valueType, chromName, knucleotide, selectedProperty, positions: { startPosition: , endPosition: }, resolution
    let chromName = formData.chromName; // 染色体名称
    let valueType = formData.valueType; // 值的类型：original或者standard
    let knucleotide = formData.knucleotide; // 表示k-nucleotide的 k 值
    let property = formData.selectedProperty; // 选中的理化特性
    let positions = formData.positions; // 设定的染色体的起始位置和结束位置
    // console.log(positions);
    let resolution = parseInt(formData.resolution); // 先假设从前端传过来的分辨率参数为1000
    let karyotype = {                   // 确定核型文件
        "hg38": "karyotype.human.hg38.txt",
        "mm39": "karyotype.mouse.mm39.txt",
        "saccer3": "karyotype.yeast.txt"
    };
    // 染色体编号
    let chromosome = {
        "hg38": "hs",
        "mm39": "mm",
        "saccer3": "chr"
    };
     // 截取chromName中的号码
    let id = chromName.slice(3);
    let chromID = chromosome[genome] + id;
    // 显示的染色体位置的过滤参数
    let chromosomes = chromID + ":" + Math.floor(positions.startPosition / resolution) + "-" + Math.floor(positions.endPosition / resolution)
    // let chromosomes = chromID + ":" + positions.startPosition + "-" + positions.endPosition // 图中不显示最后一个数
    // 有异步操作, 接下来的步骤放到回调里完成
    geneTrack(genome, chromName, valueType, knucleotide, property, positions, dir, resolution, (err)=>{
        if(err){
            res.json({
                data: "failed to create circular image, please check your parameters",
                msg: err
            })
        }else{
            let dataTrack = dir + "/data.line.txt";
            // 改变命令中参数-param：核型文件 karyotype=，数据文件 plots/plot/file=
            // let param = "karyotype=" + path.join(__dirname, "../public/circos/conf/") + karyotype[genome] + " " + "-param chromosomes=" + chromosomes + " " + "-param plots/plot/file=" + dataTrack;
            let param = "karyotype=" + path.join(__dirname, "../public/circos/conf/") + karyotype[genome] + " " + "-param chromosomes_units=" + resolution + " " + "-param chromosomes=" + chromosomes + " " + "-param plots/plot/file=" + dataTrack;
            // let param = "karyotype=" + karyotype;
            let mycwd = path.join(__dirname, "../public/circos/circos-0.69-9/bin"); // circos可执行文件的目录
            let command = "perl circos -conf " + path.join(__dirname, "../public/circos/conf/circos.conf") + " -param " + param + " -outputdir " + dir + " -outputfile " + imgName + " -nosvg";
            console.log(command)
            
            if (runExecSync(command, mycwd) != "error") {
                console.log("circos generated successfully");
                let filename = "/circos/" + genome + "/" + timeNow + "/" + imgName;
                res.json({
                    code: 200,
                    data: filename,
                    msg: "success"
                });
            }else{
                res.json({
                    data: "failed to create circular image, please check your parameters"
                })
            }
        }
    });
});


// 这个函数用于对在二进制文件中读取到的浮点数进行精度转换, 返回转换后的值
function formatFloat(f, digit) {
    let m = Math.pow(10, digit);
    return Math.round(f * m) / m;
}

// 将读取到的二进制数据转换为列表
function readValues(buf, offset) {
    let values = [];
    for (let i = 0; i < buf.length / offset; i++) {
        values.push(formatFloat(buf.readFloatLE(offset * i), 6))
    }
    return values;
}

// 求平均值
function average(values){
    let sum = 0;
    let len = values.length;
    for(let i=0; i<len; i++){
        sum += values[i];
    }
    // 保留3位小数
    let ave = (sum/len).toFixed(3);
    return ave;
}

// 读取二进制文件(每个数值占用4字节)的压缩文件
function bin_gz(bin_file, data_file, positions, chromID, resolution, callback) {
    fs.open(bin_file, "r", (err, fd) => {
        if (err) {
            if (err.code == "ENOENT") {
                console.log("no such file")
            } else {
                console.log("file open failed")
            }
            if (typeof callback == "function")
                callback(err);
        } else {
            fs.readFile(fd, (err, bytes) => {
                if (err) {
                    console.log("read file failed")
                } else {
                    zlib.gunzip(bytes, (err, bytes) => {
                        if (err) {
                            console.log(err)
                            process.exitCode = 1;
                        }
                        // 将前端传过来的数的左闭右开
                        let buf = Buffer.from(bytes.slice(positions.startPosition * 4, positions.endPosition * 4))
                        let valueList = readValues(buf, 4)
                        // valueList按照一定格式写入文件
                        let data = ""
                        for (let i = 0; i < valueList.length; i+=resolution) {
                            let valueTmp = average(valueList.slice(i, i+resolution));
                            let position = positions.startPosition + i;
                            data = data + chromID + "\t" + position + "\t" + (position + resolution - 1) + "\t" + valueTmp + '\n';
                        }
                        fs.writeFileSync(data_file, data);
                        if (typeof callback == "function")
                            callback();
                    })
                }
            })
        }
    })
}

// function bin_gz(bin_file, data_file, positions, chromID) {
//     let fd = fs.openSync(bin_file, "r");
//     let bytes = fs.readFileSync(fd);
//     // zlib.gunzipSync(bytes);
//     let buf = Buffer.from(zlib.gunzipSync(bytes).slice(positions.startPosition * 4, positions.endPosition * 4))
//     let valueList = readValues(buf, 4)
//     // valueList按照一定格式写入文件
//     let data = ""
//     for (let i = 0; i < valueList.length; i++) {
//         let position = positions.startPosition + i;
//         data = data + chromID + "\t" + position + "\t" + position + "\t" + valueList[i] + '\n';
//     }
//     fs.writeFileSync(data_file, data);
// }

// 用于生成数据文件，显示track，返回数据文件的存储路径
function geneTrack(genome, chromName, valueType, knucleotide, property, positions, dir, resolution, callback) {
    // 应该从二进制的理化特性值数据文件中提取 startPosition 到 endPosition 的值，并且按照circos数据文件的格式进行保存
    // 现在还需要这样的二进制理化特性数据文件，计划将wig文件去掉第一行，存储到二进制文件
    // 二进制文件存放位置：public/files/values/基因组类型(hg38/mm39/saccer3)/值的类型(original/standard)/文件夹(MonoDNAOri...)/文件名
    let dir_name = {
        original: ["monoDNAOri", "diDNAOri", "triDNAOri"],
        standard: ["monoDNASta", "diDNASta", "triDNASta"]
    }
    let id_property = [monodna, didna, tridna]
    let binDir = path.join(__dirname, "../public/files/values/", genome) + "/" + valueType + "/" + dir_name[valueType][knucleotide - 1];  
    let type = (valueType == "original") ? "ori" : "sta";
    let file_name = genome + "_" + chromName + "_" + property + "_" + id_property[knucleotide - 1][property] + "_" + type + ".gz";
    // 染色体编号
    let chromosome = {
        "hg38": "hs",
        "mm39": "mm",
        "saccer3": "chr"
    };
    // 截取chromName中的号码, 截掉 chr 3个字母
    let id = chromName.slice(3);
    let chromID = chromosome[genome] + id;

    let bin_file = path.join(binDir, file_name);
    let data_file = dir + "/data.line.txt";
    bin_gz(bin_file, data_file, positions, chromID, resolution, (err)=>{
        console.log("data file generated successfully")
        if(typeof callback == "function"){
            callback(err)
        }
    });
}

// 同步执行circos命令行, 参数：command->命令, cwd->子进程(circos)的工作目录
function runExecSync(command, mycwd) {
    const execSync = require('child_process').execSync;
    try {
        execSync(command, {
            cwd: mycwd
        });
    } catch (err) {
        console.log("Run " + err);
        // 如果发生错误，返回“error”字符串给主进程
        return "error";
    }
}

module.exports = router;