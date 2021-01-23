<template>
  <div class="genomes" :style="'height:' + fullHeight + 'px'">
    <!-- <h1>This is {{ $route.params.type }} page</h1> -->
    <!-- <el-button @click="tiao()">linear</el-button> -->
    <el-container>
      <el-aside>
        <el-row class="options">
          <el-col :span="10">
            Type of property values:
          </el-col>
          <el-col :span="14">
            <el-radio-group v-model="valueType" @change="passV()">
              <el-radio-button label="original">Original</el-radio-button>
              <el-radio-button label="standard">Standard</el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
        <!-- <el-row class="options">
          <el-col :span="10"> <i>k</i> of <i>k</i>-nucleotide: </el-col>
          <el-col :span="14">
            <el-radio-group v-model="kValue" @change="passK()">
              <el-radio label="1">1</el-radio>
              <el-radio label="2">2</el-radio>
              <el-radio label="3">3</el-radio>
            </el-radio-group>
          </el-col>
        </el-row> -->
      </el-aside>
      <el-main>
        <div class="insert">
          <h1>{{ valueType }}</h1>
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
      // 减160是减去页眉和页脚的高度和
      fullHeight: window.innerHeight - 160,
      valueType: "original",
      kValue: "1"
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
        this.kValue = "1";
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
      this.fullHeight = window.innerHeight - 160;
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

    passV() {
      let val = this.valueType;
      this.sendParams({ valueType: val });
    },

    passK() {
      let val = this.kValue;
      this.sendParams({ kValue: val });
    }
  },
  //注销window.onresize事件
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style>
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
  text-align: left;
  padding-left: 15px;
  padding-top: 20px;
}

.el-main {
  height: 100%;
  background-color: #e9eef3;
  /* line-height: 160px; */
}

.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: #fff;
  background-color: #f3c649;
  border-color: #f3c649;
  box-shadow: -1px 0 0 0 #f3c649;
}

.el-radio__input.is-checked .el-radio__inner {
  border-color: #f3c649;
  background: #f3c649;
}

.el-radio__input.is-checked + .el-radio__label {
  color: #f3c649;
}

.el-radio__label {
  font-size: 16px;
}
</style>
