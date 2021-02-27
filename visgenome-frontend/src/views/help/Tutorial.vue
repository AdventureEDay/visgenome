<template>
  <div class="tutorial">
    <h1>This is Tutorial page</h1>
    <div class="circos">
      <img :src="circos" alt="circos" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Tutorial",
  data() {
    return {
      genome: "saccer3",
      // 这里不加require 图片加载不出来, 如果直接在<img>的src属性中使用这个图片地址就没有问题
      circos: require("../../assets/loading.gif")
    };
  },
  mounted() {
    // 用的时候使用按钮控制
    let _this = this;
    let genome = this.genome;
    this.axios.post("/circos", { genome }).then(response => {
      _this.circos = response.data.data;
      console.log(response.data.data);
    });
  }
};
</script>

<style scoped>
.circos {
  width: 500px;
  height: 500px;
}
.circos img {
  width: 100%;
  height: 100%;
}
</style>
