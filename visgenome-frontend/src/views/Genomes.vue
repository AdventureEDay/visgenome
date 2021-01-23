<template>
  <div class="genomes">
    <!-- :style="'height:' + fullHeight + 'px'" -->
    <!-- <h1>This is {{ $route.params.type }} page</h1> -->
    <!-- <el-button @click="tiao()">linear</el-button> -->
    <el-container>
      <el-aside>
        <div style="height: 50px; margin:10px 0 10px">
          <img style="height: 50px; width: auto" src="../assets/para.png" />
        </div>
        <el-row class="options">
          <el-col class="label">
            Type of property values:
          </el-col>
          <el-col class="content">
            <el-radio-group v-model="valueType" @change="passV">
              <el-radio-button label="original">Original</el-radio-button>
              <el-radio-button label="standard">Standard</el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row class="options">
          <el-col class="label">Values by chromosome:</el-col>
          <el-col class="content">
            <el-select
              v-if="$route.params.type === 'human'"
              v-model="chromHum"
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
              v-model="chromMou"
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
              v-model="chromYea"
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
      </el-aside>
      <el-main>
        <div class="insert">
          <!-- <h1>{{ valueType }}</h1> -->
          <iframe
            ref="params"
            src="/linear/hg38/index.html"
            frameborder="0"
            v-if="$route.params.type === 'human'"
          ></iframe>
          <iframe
            ref="params"
            src="/linear/mm39/index.html"
            frameborder="0"
            v-else-if="$route.params.type === 'mouse'"
          ></iframe>
          <iframe
            ref="params"
            src="/linear/saccer3/index.html"
            frameborder="0"
            v-else-if="$route.params.type === 'yeast'"
          ></iframe>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Genomes",
  data() {
    return {
      // 减160是减去页眉和页脚的高度
      fullHeight: window.innerHeight - 120,
      valueType: "original",
      chromHum: "chr1",
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
        "chrM"
      ],
      chromMou: "chr1",
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
        "chrM"
      ],
      chromYea: "chrI",
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
        "chrM"
      ]
    };
  },
  mounted() {
    let _this = this;
    window.onresize = () => {
      _this.get_browseHeight();
    };
    // this.iframe = this.$refs["params"].contentWindow;
    // window.addEventListener("message", this.sendParams);
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
      handler: function(val, oldVal) {
        this.valueType = "original";
        if (val.params.type === "human") {
          this.chromHum = "chr1";
        } else if (val.params.type === "mouse") {
          this.chromMou = "chr1";
        } else if (val.params.type === "yeast") {
          this.chromYea = "chrI";
        }
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {
    // tiao() {
    //   // window.open();
    //   window.location.href = "/linear/index.html";
    // }
    get_browseHeight() {
      this.fullHeight = window.innerHeight - 120;
    },

    sendParams(val) {
      this.iframe = this.$refs["params"].contentWindow;
      this.iframe.postMessage(
        {
          data: val
        },
        "*"
      );
    },

    passV(val) {
      // let val = this.valueType;
      // console.log(val);
      this.sendParams({ valueType: val });
    },

    passChrom(val) {
      this.sendParams({ chromName: val });
    }
  },
  //注销window.onresize事件
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style scoped lang="less">
.genomes {
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

.el-container {
  height: 100%;
}

.el-aside {
  width: 20% !important;
  background-color: #e6e6d3;
  color: #333;
  line-height: 50px;
  // text-align: left;
  // padding-left: 15px;
  // padding-top: 20px;
}

.el-main {
  height: 100%;
  background-color: #e9eef3;
  /* line-height: 160px; */
}

.label {
  text-align: left;
  padding-left: 15px;
  background-color: #a5c2a0;
  border-radius: 10px;
}

.content {
  margin: 10px 0 10px;
}

/deep/ .el-input {
  width: 188px;
}

// /deep/ .el-radio-button__orig-radio:checked + .el-radio-button__inner {
//   color: #fff;
//   background-color: #f3c649;
//   border-color: #f3c649;
//   box-shadow: -1px 0 0 0 #f3c649;
// }
</style>
