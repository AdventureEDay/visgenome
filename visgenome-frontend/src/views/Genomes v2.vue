<template>
  <div class="genomes" :style="'height:' + fullHeight + 'px'">
    <!-- <h1>This is {{ $route.params.type }} page</h1> -->
    <!-- <el-button @click="tiao()">linear</el-button> -->
    <el-container :style="'height:' + fullHeight + 'px'">
      <el-aside>
        Type of property values:
        <el-button-group>
          <el-button type="primary" plain @click="change2ori()"
            >Original</el-button
          >
          <el-button type="warning" plain @click="change2sta()"
            >Standard</el-button
          >
        </el-button-group>
      </el-aside>
      <el-main>
        <com-human
          :msg="valueType"
          v-if="$route.params.type === 'human'"
        ></com-human>
        <com-mouse
          :msg="valueType"
          v-else-if="$route.params.type === 'mouse'"
        ></com-mouse>
        <com-yeast
          :msg="valueType"
          v-else-if="$route.params.type === 'yeast'"
        ></com-yeast>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import human from "@/views/genomes/Human38.vue";
export default {
  name: "Genomes",
  components: {
    comHuman: () => import("@/views/genomes/Human38.vue"),
    // comHuman: human,
    comMouse: () => import("@/views/genomes/Mouse39.vue"),
    comYeast: () => import("@/views/genomes/sacCer3.vue")
  },
  data() {
    return {
      // 减160是减去页眉和页脚的高度和
      fullHeight: document.documentElement.clientHeight - 160,
      valueType: "original"
    };
  },
  mounted() {
    this.get_bodyHeight();
  },
  watch: {
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val - 160;
        this.timer = true;
        let _this = this;
        // 防止过度监测事件，导致卡顿
        setTimeout(() => {
          _this.timer = false;
        }, 400);
      }
    },
    // 监听路由变化，每次进入页面都是original
    $route: {
      // eslint-disable-next-line no-unused-vars
      handler: function(val, oldVal) {
        // console.log(val);
        this.valueType = "original";
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
    get_bodyHeight() {
      let _this = this;
      window.onresize = () => {
        return () => {
          window.fullHeight = document.documentElement.clientHeight;
          _this.fullHeight = window.fullHeight - 160;
        };
      };
    },
    change2ori() {
      this.valueType = "original";
      // console.log(this.valueType);
    },
    change2sta() {
      this.valueType = "standard";
      // console.log(this.valueType);
    }
  }
};
</script>

<style>
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

/* .el-container {
    height: 100%;
}  */

.el-aside {
  width: 20% !important;
  background-color: #e6e6d3;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  height: 100%;
  background-color: #e9eef3;
  text-align: center;
  /* line-height: 160px; */
}
</style>
