<template>
  <div class="genomes">
    <el-container>
      <el-header class="title">
        <img alt="tracks logo" src="../assets/tracks.png" />
        Tracks
      </el-header>
        <el-container>
          <el-header style="padding: 30px 20px 0 10px">
            <el-col :span="6">Note about the colors of nucleotide: </el-col>
            <el-col :span="1"
              ><div
                style="width: 25px; height: 20px; background-color: #4caf50; color: #fff"
              >
                A
              </div></el-col
            >
            <el-col :span="1"
              ><div
                style="width: 25px; height: 20px; background-color: #2691f3; color: #fff"
              >
                C
              </div></el-col
            >
            <el-col :span="1"
              ><div
                style="width: 25px; height: 20px; background-color: #ffc107;"
              >
                G
              </div></el-col
            >
            <el-col :span="1"
              ><div
                style="width: 25px; height: 20px; background-color: #f44336; color: #fff"
              >
                T
              </div></el-col
            >
          </el-header>
          <el-divider content-position="left"
            ><span style="color: #a5c2a0">Notes</span></el-divider
          >
          <el-main
            class="insert"
            v-loading="loading"
            element-loading-text="loading..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.5)"
          >
            <!-- 嵌入的内容在public文件夹，直接使用/ -->
            <iframe ref="params" src="/jbrowse/index.html?config=genomes/config.json" frameborder="0"></iframe>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
export default {
  name: "Genomes",
  data() {
    return {
      loading: true,
      valueType: "original",
      chromName: "",
      srcFolder: {
        human: "hg38",
        mouse: "mm39",
        yeast: "saccer3"
      },
      valueFile: {
        original: "ori",
        standard: "sta"
      },
      options: {
        human: [
          "chr1",
          "chr2",
          "chr3",
          "chr4",
          "chr5",
          "chr6",
          "chr7",
          "chr8",
          "chr9",
          "chr10",
          "chr11",
          "chr12",
          "chr13",
          "chr14",
          "chr15",
          "chr16",
          "chr17",
          "chr18",
          "chr19",
          "chr20",
          "chr21",
          "chr22",
          "chrX",
          "chrY",
          "chrM"
        ],
        mouse: [
          "chr1",
          "chr2",
          "chr3",
          "chr4",
          "chr5",
          "chr6",
          "chr7",
          "chr8",
          "chr9",
          "chr10",
          "chr11",
          "chr12",
          "chr13",
          "chr14",
          "chr15",
          "chr16",
          "chr17",
          "chr18",
          "chr19",
          "chrX",
          "chrY",
          "chrM"
        ],
        yeast: [
          "chrI",
          "chrII",
          "chrIII",
          "chrIV",
          "chrV",
          "chrVI",
          "chrVII",
          "chrVIII",
          "chrIX",
          "chrX",
          "chrXI",
          "chrXII",
          "chrXIII",
          "chrXIV",
          "chrXV",
          "chrXVI",
          "chrM"
        ]
      }
    };
  },
  mounted() {
    let _this = this;
    const iframe = this.$refs["params"];
    // 兼容IE浏览器
    // 在整个生命周期只要发生了load事件，就会监听到
    if (iframe.attachEvent) {
      iframe.attachEvent("onload", () => {
        _this.changeStatus();
      });
    } else {
      iframe.onload = function() {
        _this.changeStatus();
      };
    }
  },
  methods: {
    changeStatus() {
      // 停止加载框的显示
      this.loading = false;
    }
  }
};
</script>

<style scoped lang="less">
.genomes {
  height: 100%;
}

.title {
  height: 80px !important;
  line-height: 80px;
  font-size: 1.5em;
  text-align: center;
  border-bottom: 2px solid #a5c2a0;
  background: #f5f5dc;
}

.title img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 10px;
}

.el-container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.insert {
  width: 95%;
  margin: 0 auto;
}

.insert iframe {
  width: 100%;
  min-height: 95%;
}

.el-aside {
  width: 16% !important;
  color: #a5c2a0;
  line-height: 40px;
  border-right: solid 2px #a5c2a0;
}

.el-main {
  height: 100%;
  // background-color: #e9eef3;
  /* line-height: 160px; */
}

.label {
  text-align: left;
  padding-left: 15px;
  // background-color: #a5c2a0;
  // border-top: solid 3px #a5c2a0;
  // border-radius: 10px;
}

.options {
  border-bottom: #a5c2a0 double 3px;
}

.content {
  margin: 10px 0 10px;
}

/deep/ .el-input {
  width: 188px;
}

/deep/ .el-input__inner {
  border: 1px solid #a5c2a0;
  background: #f5f5f5;
}

/deep/ .el-radio-button__inner {
  border: 1px solid #a5c2a0;
  background: #f5f5f5;
}
// /deep/ .el-radio-button__orig-radio:checked + .el-radio-button__inner {
//   color: #fff;
//   background-color: #f3c649;
//   border-color: #f3c649;
//   box-shadow: -1px 0 0 0 #f3c649;
// }
</style>
