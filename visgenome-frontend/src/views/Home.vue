<template>
  <div class="home">
    <el-row class="visgenome">
      <img alt="home logo" src="../assets/home.png" />
      Welcome to iVisgenome
    </el-row>
    <!-- :style="{minHeight: minHeight + 'px'}" -->
    <el-row class="item">
      <div class="title">
        <img alt="genome logo" src="../assets/title.png" />
        Introduction
      </div>
      <div class="intro">
        <p>
          <b>iVisgenome</b> can be used to visualize the whole-genome (e.g.
          <b>Human, Mouse, and Yeast</b>) sequences represented by
          physicochemical property values. We integrate
          <a href="http://circos.ca/" target="_blank">Circos</a> by circular
          ideogram layout , and
          <a href="https://www.jbrowse.org/jb2/" target="_blank">JBrowse 2</a>
          for visualizing the whole genome sequence by linear view. The following images are examples of embedded Circos and Jbrowse 2 for
          visualizing our biological sequence values.
        </p>
        <el-row type="flex" justify="space-between" class="circosImg">
          <el-col :span="11">
            <el-row class="imageTitle">Examples for Circos</el-row>
            <el-row>
              <el-col class="item" :span="12">
                <img
                  alt="example"
                  src="../assets/home/ex02.png"
                  style="width: 100%; height: auto"
                />
              </el-col>
              <el-col class="item" :span="12">
                <img
                  alt="example"
                  src="../assets/home/ex03.png"
                  style="width: 100%; height: auto"
                />
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
              <el-col class="item" :span="12">
                <img
                  alt="example"
                  src="../assets/home/ex04.png"
                  style="width: 100%; height: auto;"
                />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="11">
            <el-row class="imageTitle">
              Examples for JBrowse
            </el-row>
            <el-row type="flex" justify="space-around" style="margin-top: 10%">
              <img
                class="item"
                alt="example"
                src="../assets/home/ex01.png"
                style="width: 100%; height: auto"
              />
            </el-row>
          </el-col>
        </el-row>
        <el-divider>
          <i style="color: blue" class="el-icon-orange"></i>
        </el-divider>
      </div>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  min-height: calc(100% - 120px);
  text-align: left;
}

.visgenome {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 1.5em;
  /* border-bottom: 5px groove #a5c2a0; */
  background: #f5f5dc;
}

.visgenome img {
  width: 45px;
  height: auto;
  vertical-align: middle;
}

.title {
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  padding: 30px 60px;
}

.title img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 10px;
}

.intro {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  padding: 0 60px;
  text-align: justify;
  line-height: 1.5em;
}

.download {
  text-indent: 2em;
  margin: 5px;
}

a {
  font-style: italic;
  font-weight: bolder;
  color: #a5c2a0;
}

.imageTitle {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #deeedc;
  border-radius: 10px;
}

/* 以下设置：图片在划过的时候放大 */
/* .circosImg {
  overflow: hidden;
} */
.circosImg .item {
  position: relative;
  transition: transform 1s;
}

.circosImg .item:hover{
  transform: scale(1.5);
  z-index: 1;
}
</style>
