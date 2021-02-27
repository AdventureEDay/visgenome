var express = require('express');
var router = express.Router();
const path = require('path');

// 前端传参数过来
router.post("/", function (req, res, next) {
    // 在这里使用circos生成图片，图片名称使用Date.now()时间命名
    let imgName = Date.now() + ".png";
    // genome表示的是哪一种基因组
    let genome = req.body.genome;

    // 假设从前端传过来的参数：染色体的编号为 chrom
    let chrom = "chrM"
    // 改变命令中参数-param：核型文件 karyotype=，数据文件 plots/plot/file=
    let param = "chromosomes=" + chrom // 以修改显示的染色体为例, 先不直接改变文件

    let command = "perl circos -conf "
    let mycwd = path.join(__dirname, "../public/circos/circos-0.69-9/bin"); // circos可执行文件的目录
    command = command + path.join(__dirname, "../public/circos/", genome, "/conf/circos.conf") + " -param " + param + " -outputdir " + path.join(__dirname, "../public/circos/", genome, "/images/") + " -outputfile " + imgName + " -nosvg";
    console.log(command);
    
    if (runExecSync(command, mycwd) != "error") {
        let filename = "/circos/" + genome + "/images/" + imgName;
        res.json({
            code: 200,
            data: filename,
            msg: "success"
        });
    }
});

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