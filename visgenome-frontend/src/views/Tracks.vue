<template>
  <div class="genomes">
    <el-container>
      <el-header class="title">
        <img alt="tracks logo" src="../assets/tracks.png" />
        Tracks
      </el-header>
      <el-container>
        <el-aside>
          <div style="height: 50px; margin: 10px 0 10px">
            <img style="height: 50px; width: auto" src="../assets/para.png" />
          </div>
          <el-row class="options">
            <el-col class="label">Choose chromosome</el-col>
            <el-col class="content">
              <!-- passChrom 用于给iframe传递参数：选中的染色体 -->
              <el-select
                v-model="chromName"
                placeholder="please select a chromosome"
              >
                <el-option
                  v-for="item in options[$route.params.type]"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="options">
            <el-col class="label"> Type of property values </el-col>
            <el-col class="content">
              <!-- passV 用于给iframe传递参数：值的类型 -->
              <el-radio-group v-model="valueType">
                <el-radio-button label="original">Original</el-radio-button>
                <el-radio-button label="standard">Standard</el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>
        </el-aside>
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
            <!-- <iframe ref="params" src="/jbrowse/?config=test_data/volvox/config.json" frameborder="0">
            </iframe> -->
            <iframe ref="params" :src="src" frameborder="0"></iframe>
          </el-main>
        </el-container>
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
    // this.src="/jbrowse/?config=genomes/hg38/original/config_chr1_ori.json";
    let type = this.$route.params.type;
    this.chromName = this.options[type][0]; // 默认选择的染色体为第一个
    // this.src="/jbrowse/?config=genomes/" + this.srcFolder[type] + "/" + this.valueType + "/config_" + this.chromName + "_" + this.valueFile[this.valueType] + ".json";
    const iframe = this.$refs["params"];
    // console.log(iframe);
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
  // 使用计算属性监听src
  computed: {
    src: function(){
      return "/jbrowse/index.html?config=genomes/" + this.srcFolder[this.$route.params.type] + "/" + this.valueType + "/config_" + this.chromName + "_" + this.valueFile[this.valueType] + ".json";
    }
  },
  watch: {
    // 监听路由变化，每次进入页面都是original
    $route: {
      // eslint-disable-next-line no-unused-vars
      handler: function(val, oldVal) {
        this.valueType = "original";
        this.chromName = this.options[val.params.type][0]; // 默认选择的染色体为第一个
        // this.src="/jbrowse/?config=genomes/" + this.srcFolder[val.params.type] + "/" + this.valueType + "/config_" + this.chromName + "_" + this.valueFile[this.valueType] + ".json";
        // 监听到路由发生变化，再重新设置为加载状态
        this.loading = true;
      },
      // 深度观察监听
      deep: true
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
</style>
