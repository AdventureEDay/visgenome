<template>
  <div class="webtitle">
    <!-- :default-active="$route.path" 可以保证在刷新时选中状态不变-->
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      class="header"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#a5c2a0"
      router
    >
      <el-menu-item index="/" class="home">
        <i class="el-icon-s-home"></i>
        Home
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          Genomes
        </template>
        <!-- <el-menu-item index="2-1"
          ><router-link :to="{ name: 'Genomes', params: { type: 'human' } }"
            >Human GRCH38/hg38</router-link
          ></el-menu-item
        > -->
        <el-menu-item index="/genomes/human">Human GRCH38/hg38</el-menu-item>
        <el-menu-item index="/genomes/mouse">Mouse GRCm39/mm39</el-menu-item>
        <el-menu-item index="/genomes/yeast"
          >SacCer_Apr2011/sacCer3</el-menu-item
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-question"></i>
          Help
        </template>
        <el-menu-item index="/help/tutorial">Tutorial</el-menu-item>
        <el-menu-item index="/help/contact">Contact</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item>
        <a href="https://github.com/wyzhang0401/KNIndex" target="_blank"
          >GitHub</a
        >
      </el-menu-item> -->
      <span class="github">
        <a href="https://github.com/wyzhang0401/KNIndex" target="_blank">
          <img
            src="../assets/github.png"
            style="height:30px; width: auto; margin-right: 10px; vertical-align: middle;"
          />GitHub</a
        >
      </span>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activePath: this.$route.path
    };
  },
  methods: {
    // select方法可以用于路由跳转传参
    // eslint-disable-next-line no-unused-vars
    handleSelect(key, keyPath) {
      // this.$router.push({
      //   path: key,
      //   params: { data: "query" }
      // });
      // console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.webtitle {
  width: 100%;
}

.header {
  background-color: #545c64;
  /* background-color: rgb(51, 51, 51); */
  padding-left: 50px;
}

.home {
  font-size: 16px;
  font-weight: bold;
}

.el-menu-item [class^="el-icon-"] {
  font-size: 15px;
}

.el-submenu [class^="el-icon-"] {
  font-size: 15px;
}

.github {
  float: right;
  margin-right: 50px;
  /* margin: 0 auto; */
  height: 60px;
  line-height: 60px;
}

.github a {
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: bold;
  /* font-style: italic; */
}
a:hover {
  color: #a5c2a0;
}
</style>
