var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

// 前端传参数过来
router.post("/", function (req, res, next) {
    let timeNow = Date.now();
    let imgName = timeNow + ".svg"; // 在这里使用circos生成图片，图片名称使用Date.now()时间命名
    let genome = req.body.genome; // genome表示的是哪一种基因组
    // 在genome对应的文件夹下创建一个以时间命名的文件夹, 核型文件，数据文件以及生成的图像都保存在这个文件夹下
    let dir = path.join(__dirname, "../public/circos/", genome) + "/" + timeNow;
    fs.mkdirSync(dir, err => {
        if (err) throw err;
    });
    let formData = req.body.formData; // 接收前端传过来的参数, valueType, chromName, knucleotide, selectedProperty, positions: { startPosition: , endPosition: }
    let chromName = formData.chromName; // 染色体名称
    let valueType = formData.valueType; // 值的类型：original或者standard
    let knucleotide = formData.knucleotide; // 表示k-nucleotide的 k 值
    let property = formData.selectedProperty; // 选中的理化特性
    let positions = formData.positions; // 设定的染色体的起始位置和结束位置
    let karyotype = geneKaryotype(genome, chromName, positions, dir);
    let dataTrack = geneTrack(genome, valueType, knucleotide, property, positions, dir);
    // 改变命令中参数-param：核型文件 karyotype=，数据文件 plots/plot/file=
    let param = "karyotype=" + karyotype;
    let mycwd = path.join(__dirname, "../public/circos/circos-0.69-9/bin"); // circos可执行文件的目录
    let command = "perl circos -conf " + path.join(__dirname, "../public/circos/conf/circos.conf") + " -param " + param + " -outputdir " + path.dirname(karyotype) + " -outputfile " + imgName + " -nopng";
    if (runExecSync(command, mycwd) != "error") {
        console.log("circos generated successfully");
        let filename = "/circos/" + genome + "/" + timeNow + "/" + imgName;
        res.json({
            code: 200,
            data: filename,
            msg: "success"
        });
    }
});

// 生成核型文件的函数 文件名：karyotype.genome.txt，返回核型文件的存储目录
function geneKaryotype(genome, chromName, positions, dir) {
    // 染色体编号
    let chromosome = { "hg38": "hs", "mm39": "mm", "saccer3": "chr" };
    // 染色体颜色代码
    let colors = {
        "hg38": { "hs1": "chr1", "hs2": "chr2", "hs3": "chr3", "hs4": "chr4", "hs5": "chr5", "hs6": "chr6", "hs7": "chr7", "hs8": "chr8", "hs9": "chr9", "hs10": "chr10", "hs11": "chr11", "hs12": "chr12", "hs13": "chr13", "hs14": "chr14", "hs15": "chr15", "hs16": "chr16", "hs17": "chr17", "hs18": "chr18", "hs19": "chr19", "hs20": "chr20", "hs21": "chr21", "hs22": "chr22", "hsX": "chrx", "hsY": "chry", "hsM": "chrm" },
        "mm39": { "mm1": "chr1", "mm2": "chr2", "mm3": "chr3", "mm4": "chr4", "mm5": "chr5", "mm6": "chr6", "mm7": "chr7", "mm8": "chr8", "mm9": "chr9", "mm10": "chr10", "mm11": "chr11", "mm12": "chr12", "mm13": "chr13", "mm14": "chr14", "mm15": "chr15", "mm16": "chr16", "mm17": "chr17", "mm18": "chr18", "mm19": "chr19", "mmX": "chx", "mmY": "chry", "mmM": "chrm" },
        "saccer3": { "chrI": "chr1", "chrII": "chr2", "chrIII": "chr3", "chrIV": "chr4", "chrV": "chr5", "chrVI": "chr6", "chrVII": "chr7", "chrVIII": "chr8", "chrIX": "chr9", "chrX": "chr10", "chrXI": "chr11", "chrXII": "chr12", "chrXIII": "chr13", "chrXIV": "chr14", "chrXV": "chr15", "chrXVI": "chr16", "chrM": "chrm" }
    };
    // 截取chromName中的号码
    let id = chromName.slice(3);
    let chromID = chromosome[genome] + id;
    let chromColor = colors[genome][chromID];
    let karyotype = "chr - " + chromID + " " + chromName + " " + positions.startPosition + " " + positions.endPosition + " " + chromColor;
    // let fileKartyotype = path.join(__dirname, "../public/circos/", genome, timeNow, "/karyotype." + genome + ".txt");
    // let fileKartyotype = path.dirname(__dirname) + "/public/circos/" + genome + "/" + timeNow + "/karyotype." + genome + ".txt";
    let fileKartyotype = dir + "/karyotype." + genome + ".txt";
    fs.writeFileSync(fileKartyotype, karyotype, err => {
        if (err) throw err;
    })
    return fileKartyotype;
}

// 用于生成数据文件，显示track，返回数据文件的目录
function geneTrack(genome, valueType, knucleotide, property, positions, dir) {
    // 应该从二进制的理化特性值数据文件中提取 startPosition 到 endPosition 的值，并且按照circos数据文件的格式进行保存
    // 现在还需要这样的二进制理化特性数据文件，计划将wig文件去掉第一行，存储到二进制文件
    // 存储目录结构 genome/valueType/knucleotide/filename
}

// 同步执行circos命令行, 参数：command->命令, cwd->子进程(circos)的工作目录
function runExecSync(command, mycwd) {
    const execSync = require('child_process').execSync;
    try {
        execSync(command, {
            cwd: mycwd
        });
    } catch (err) {
        alert("Run " + err);
        // 如果发生错误，返回“error”字符串给主进程
        return "error";
    }
}

module.exports = router;