<template>
  <div class="genomes">
    <!-- :style="'height:' + fullHeight + 'px'" -->
    <!-- <h1>This is {{ $route.params.type }} page</h1> -->
    <!-- <el-button @click="tiao()">linear</el-button> -->
    <el-container>
      <el-header class="title">
        <img alt="circos logo" src="../assets/circle.png" />
        Circos
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
                v-if="$route.params.type === 'human'"
                v-model="chromName"
                placeholder="please select"
                @change="passChrom"
              >
                <el-option
                  v-for="item in optionsHum"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
              <el-select
                v-if="$route.params.type === 'mouse'"
                v-model="chromName"
                placeholder="please select"
                @change="passChrom"
              >
                <el-option
                  v-for="item in optionsMou"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
              <el-select
                v-if="$route.params.type === 'yeast'"
                v-model="chromName"
                placeholder="please select"
                @change="passChrom"
              >
                <el-option
                  v-for="item in optionsYea"
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
              <el-radio-group v-model="valueType" @change="passV">
                <el-radio-button label="original">Original</el-radio-button>
                <el-radio-button label="standard">Standard</el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>
          <!-- 在这个页面不需要跳转到circos页面了 -->
          <!-- <el-row class="options">
            <el-col class="label"> Visualize by Circos </el-col>
            <el-col class="content">
              <el-button type="warning" circle @click="visCircos">
                <img
                  src="../assets/circle.png"
                  style="width: 20px; height: auto"
                />
              </el-button>
            </el-col>
          </el-row> -->
        </el-aside>
        <el-container>
          <el-header style="padding: 30px 20px 0 10px">
            <el-col :span="6">Note about the colors of nucleotide: </el-col>
            <el-col :span="1"
              ><div
                style="width: 25px; height: 20px; background-color: #00bf00"
              >
                A
              </div></el-col
            >
            <el-col :span="1"
              ><div
                style="width: 25px; height: 20px; background-color: #4747ff"
              >
                C
              </div></el-col
            >
            <el-col :span="1"
              ><div
                style="width: 25px; height: 20px; background-color: #ffa500"
              >
                G
              </div></el-col
            >
            <el-col :span="1"
              ><div
                style="width: 25px; height: 20px; background-color: #ff0000"
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
            <!-- <h1>{{ valueType }}</h1> -->
            <iframe
              ref="params"
              id="gene-iframe"
              src="/linear/hg38/index.html"
              frameborder="0"
              v-if="$route.params.type === 'human'"
            ></iframe>
            <iframe
              ref="params"
              id="gene-iframe"
              src="/linear/mm39/index.html"
              frameborder="0"
              v-else-if="$route.params.type === 'mouse'"
            ></iframe>
            <iframe
              ref="params"
              id="gene-iframe"
              src="/linear/saccer3/index.html"
              frameborder="0"
              v-else-if="$route.params.type === 'yeast'"
            ></iframe>
            <!-- <img src="../assets/l"/> -->
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
      // chromHum: "chr1",
      optionsHum: [
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
        "chrM",
      ],
      // chromMou: "chr1",
      optionsMou: [
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
        "chrM",
      ],
      // chromYea: "chrI",
      optionsYea: [
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
        "chrM",
      ],
    };
  },
  mounted() {
    let _this = this;
    // this.iframe = this.$refs["params"].contentWindow;
    // window.addEventListener("message", this.sendParams);
    // 是否可以在刷新的时候保持原来的参数不变。。。。。。。。。。。。。。。。
    if (this.$route.params.type === "human") {
      this.chromName = "chr1";
    } else if (this.$route.params.type === "mouse") {
      this.chromName = "chr1";
    } else if (this.$route.params.type === "yeast") {
      this.chromName = "chrI";
    }

    const iframe = this.$refs["params"];
    // console.log(iframe);
    // 兼容IE浏览器
    // 在整个生命周期只要发生了load事件，就会监听到
    if (iframe.attachEvent) {
      iframe.attachEvent("onload", () => {
        _this.changeStatus();
      });
    } else {
      iframe.onload = function () {
        _this.changeStatus();
      };
    }
  },
  watch: {
    // fullHeight(val) {
    //   if (!this.timer) {
    //     this.fullHeight = val;
    //     this.timer = true;
    //     let _this = this;
    //     // 防止过度监测事件，导致卡顿
    //     setTimeout(() => {
    //       _this.timer = false;
    //     }, 400);
    //   }
    // },
    // 监听路由变化，每次进入页面都是original
    $route: {
      // eslint-disable-next-line no-unused-vars
      handler: function (val, oldVal) {
        this.valueType = "original";
        if (val.params.type === "human") {
          this.chromName = "chr1";
        } else if (val.params.type === "mouse") {
          this.chromName = "chr1";
        } else if (val.params.type === "yeast") {
          this.chromName = "chrI";
        }
        // 监听到路由发生变化，再重新设置为加载状态
        this.loading = true;
      },
      // 深度观察监听
      deep: true,
    },
  },
  methods: {
    changeStatus() {
      // 停止加载框的显示
      this.loading = false;
      // 获取iframe的DOM结构
      // let dom = this.getIFrameDom("gene-iframe");
      // let svgs = dom.getElementsByTagName("svg");
      // let svg = svgs[svgs.length-1];
      // console.log(svg.style);
    },

    // 获取iframe的DOM结构
    getIFrameDom(id) {
      return (
        document.getElementById(id).contentWindow.document ||
        document.frames[id].document
      );
    },

    sendParams(val) {
      this.iframe = this.$refs["params"].contentWindow;
      this.iframe.postMessage(
        {
          data: val,
        },
        "*"
      );
    },

    passV(val) {
      this.sendParams({ valueType: val });
    },

    passChrom(val) {
      this.sendParams({ chromName: val });
    },
    // 点击按钮进行circos图的可视化页面
    // visCircos() {
    //   let type = this.$route.params.type;
    //   let valueType = this.valueType;
    //   let chromName = this.chromName;
    //   // 向Circos页面重新传递参数时, 先把原来存储的内容删除
    //   if (sessionStorage.getItem("circosState")) {
    //     sessionStorage.removeItem("circosState");
    //   }
    //   // if (type === "human") chromName = this.chromHum;
    //   // else if (type === "mouse") chromName = this.chromMou;
    //   // else if (type === "yeast") chromName = this.chromYea;
    //   // 刷新404?, 这是因为和后端的url撞了, 加载后端circos图片使用了/circos路径
    //   // 以下方式传值给circos页面, 在circos页面刷新, 参数就消失了
    //   this.$router.push({
    //     name: "Circos",
    //     params: {
    //       type: type,
    //       valueType: valueType,
    //       chromName: chromName,
    //     },
    //   });
    // },
  },
  //注销window.onresize事件
  destroyed() {
    window.onresize = null;
  },
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
  height: 100%;
}

.insert {
  width: 100%;
  height: 80%;
  margin: 0 auto;
  /* background-color: #721e63; */
  /* background-color:  #a5c2a0; */
}

.insert iframe {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
  /* margin: 30px; */
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
