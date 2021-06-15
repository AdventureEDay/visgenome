<template>
  <div class="genomes">
    <el-container>
      <el-header class="title">
        <img alt="tracks logo" src="../assets/tracks.png" />
        Tracks
      </el-header>

      <el-main>
        <el-row type="flex" justify="center" class="adapt">
          <el-col :span="8">
            <el-row class="options">
              <el-col class="label" :span="10">Choose a chromosome:</el-col>
              <el-col class="content" :span="6">
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
          </el-col>
          <el-col :span="8">
            <el-row class="options">
              <el-col class="label" :span="10">
                Type of property values:
              </el-col>
              <el-col class="content" :span="10">
                <!-- passV 用于给iframe传递参数：值的类型 -->
                <el-radio-group v-model="valueType">
                  <el-radio-button label="original">Original</el-radio-button>
                  <el-radio-button label="standard">Standard</el-radio-button>
                </el-radio-group>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row class="options">
              <el-col :span="10" class="label"
                >The colors of nucleotide:
              </el-col>
              <el-col :span="8">
                <el-row style="line-height: 60px">
                  <el-col :span="6"
                    ><span
                      class="legend"
                      style="background-color: #4caf50; color: #fff"
                    >
                      A
                    </span></el-col
                  >
                  <el-col :span="6"
                    ><span
                      class="legend"
                      style="background-color: #2691f3; color: #fff"
                    >
                      C
                    </span></el-col
                  >
                  <el-col :span="6"
                    ><span class="legend" style="background-color: #ffc107">
                      G
                    </span></el-col
                  >
                  <el-col :span="6"
                    ><span
                      class="legend"
                      style="background-color: #f44336; color: #fff"
                    >
                      T
                    </span></el-col
                  >
                </el-row>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center" class="responsive">
          <el-col :span="7">
            <el-row class="label">Choose a chromosome:</el-row>
            <el-row class="content">
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
            </el-row>
          </el-col>
          <el-col :span="7">
            <el-row class="label"> Type of property values: </el-row>
            <el-row class="content">
              <!-- passV 用于给iframe传递参数：值的类型 -->
              <el-radio-group v-model="valueType">
                <el-radio-button label="original">Original</el-radio-button>
                <el-radio-button label="standard">Standard</el-radio-button>
              </el-radio-group>
            </el-row>
          </el-col>
          <el-col :span="7">
            <el-row class="label">The colors of nucleotide: </el-row>
            <el-row
              style="line-height: 60px"
              class="content"
              type="flex"
              justify="center"
            >
              <el-col :span="2"
                ><span
                  class="legend"
                  style="background-color: #4caf50; color: #fff"
                >
                  A
                </span></el-col
              >
              <el-col :span="2"
                ><span
                  class="legend"
                  style="background-color: #2691f3; color: #fff"
                >
                  C
                </span></el-col
              >
              <el-col :span="2"
                ><span class="legend" style="background-color: #ffc107">
                  G
                </span></el-col
              >
              <el-col :span="2"
                ><span
                  class="legend"
                  style="background-color: #f44336; color: #fff"
                >
                  T
                </span></el-col
              >
            </el-row>
          </el-col>
        </el-row>

        <el-divider content-position="left"
          ><span style="color: #a5c2a0"
            >Notes &amp; Parameters</span
          ></el-divider
        >
        <!-- 嵌入的JBrowse -->
        <el-row
          class="insert"
          v-loading="loading"
          element-loading-text="loading..."
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(255,255, 255, 1)"
        >
          <!-- 嵌入的内容在public文件夹，直接使用/ -->
          <!-- <iframe ref="params" src="/jbrowse/?config=test_data/volvox/config.json" frameborder="0">
            </iframe> -->
          <iframe
            ref="params"
            id="gene-iframe"
            :src="srcIframe"
            frameborder="0"
          ></iframe>
        </el-row>
      </el-main>
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
    let type = this.$route.params.type;
    this.chromName = this.options[type][0]; // 默认选择的染色体为第一个
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
  // 使用计算属性监听src
  computed: {
    srcIframe: {
      get() {
        return (
          "/tracks/index.html?config=genomes/" +
          this.srcFolder[this.$route.params.type] +
          "/" +
          this.valueType +
          "/config_" +
          this.chromName +
          "_" +
          this.valueFile[this.valueType] +
          ".json"
        );
      }
    }
  },
  watch: {
    // 监听路由变化，每次进入页面都是original
    $route: {
      // eslint-disable-next-line no-unused-vars
      handler: function(val, _oldVal) {
        this.valueType = "original";
        this.chromName = this.options[val.params.type][0]; // 默认选择的染色体为第一个
        // this.src="/jbrowse/?config=genomes/" + this.srcFolder[val.params.type] + "/" + this.valueType + "/config_" + this.chromName + "_" + this.valueFile[this.valueType] + ".json";
        // 监听到路由发生变化，再重新设置为加载状态
        this.loading = true;
      },
      // 深度观察监听
      deep: true
    },
    // Vue 的 计算属性 (computed) 中应当仅包含用于返回值的计算，不应该包含 DOM操作，修改外部变量，异步操作 等。这些操作应该在 侦听器 (watch) 中实现
    // 由于在计算属性中改变变量loading值会报错，所以应该在watch属性中监听srcIframe的变化，从而修改loading值
    srcIframe: {
      // eslint-disable-next-line no-unused-vars
      handler: function(_val, _oldVal) {
        this.loading = true; // 在src属性发生变化的时候有loading遮罩层
      },
      deep: true
    }
  },
  methods: {
    changeStatus() {
      // 停止加载框的显示
      // this.loading = false;
      let _this = this;
      // let dom = _this.getIFrameDom("gene-iframe");
      // 渲染完成之后才能操作样式
      setTimeout(function() {
        try {
          // 获取iframe的DOM结构
          let dom = _this.getIFrameDom("gene-iframe");

          // tracks选择框 tracks过滤 左边的两个按钮 如果有的话 改为display:none 虽然在js文件中改过了，但是以防万一，在这里也设置, 那么判断时间设置为1s
          let path = dom.getElementsByClassName(
            "MuiButtonBase-root MuiIconButton-root jss50 MuiIconButton-sizeSmall"
          );
          path[0].style.display = "none";
          path[1].style.display = "none";

          // 圆形按钮
          let button = dom.getElementsByClassName(
            "jss51 MuiFab-sizeSmall MuiFab-secondary"
          );
          button[0].style.display = "none";

          // 上边的菜单栏
          // let topMenu = dom.getElementsByTagName("header");
          // topMenu[0].style.display = "none";
          _this.loading = false;
        } catch (err) {
          // console.log(err);
          // 捕获到错误重定向？
          _this.loading = false;
        }
      }, 1000);
    },
    // 获取iframe的DOM结构
    getIFrameDom(id) {
      return (
        document.getElementById(id).contentWindow.document ||
        document.frames[id].document
      );
    }
  }
};
</script>

<style scoped lang="less">
// 注意有less语法环境
// @extra: 120px;
// .genomes {
//   height: calc(~"100% - @{extra}");
// }

// .genomes {
//   height: 100%;
// }

.el-container {
  padding: 0;
  margin: 0;
  width: 100%;
  // height: calc(~"100% - @{extra}");
  // height: 1000px;
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

.insert {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}

.insert iframe {
  width: 100%;
  height: 90vh;
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
  // text-align: left;
  // padding-left: 15px;
  // height: 50px;
  line-height: 60px;
  // background-color: #a5c2a0;
  // border-top: solid 3px #a5c2a0;
  // border-radius: 10px;
}

.options {
  // border-bottom: #a5c2a0 double 3px;
  padding-left: 10px;
}

.content {
  margin: 10px 0 10px;
  // text-align: left;
}

.legend {
  padding: 5px;
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

.responsive {
  display: none;
}

@media screen and (max-width: 1600px) {
  .adapt {
    display: none;
  }
  .responsive {
    display: flex;
  }
}
</style>
