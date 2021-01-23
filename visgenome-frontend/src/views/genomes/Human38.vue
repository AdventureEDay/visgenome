<template>
  <div class="insert">
    <h1>{{ msg }}</h1>
    <!-- <h1>This is {{ $route.params.type }} page</h1> -->
    <iframe src="/linear/hg38/index.html" frameborder="0"></iframe>
    <el-button type="warning" @click="getInput()">getInput</el-button>
  </div>
</template>

<script>
export default {
  name: "Human",
  data() {
    return {};
  },
  props: ["msg"],
  methods: {
    getInput() {
      let m = document.getElementsByTagName("input");
      console.log(m);
    }
  }
};
</script>
