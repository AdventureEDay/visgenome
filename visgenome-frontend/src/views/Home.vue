<template>
  <div class="home">
    <!-- :style="{minHeight: minHeight + 'px'}" -->
    <el-row class="item">
      <div class="title">
        <img alt="genome logo" src="../assets/title.png" />
        Introduction
      </div>
      <div class="intro">
        <p>
          <b>Visgenome(name of the webserver)</b> can be used to visualize the
          whole-genome (e.g. <b>Human, Mouse, and Yeast</b>) sequences
          represented by physicochemical property values. We integrate
          <a href="https://www.jbrowse.org/jb2/" target="_blank">JBrowse 2</a>
          for visualizing the whole genome sequence by linear view, and
          <a href="http://circos.ca/" target="_blank">Circos</a> by circular
          ideogram layout.
        </p>
        <el-row type="flex" justify="space-around">
          <el-col :span="6">
            <img
              alt="example"
              src="../assets/home/ex02.svg"
              style="width: 100%; height: auto"
            />
          </el-col>
          <el-col :span="6">
            <img
              alt="example"
              src="../assets/home/ex03.svg"
              style="width: 100%; height: auto"
            />
          </el-col>
          <el-col :span="6">
            <img
              alt="example"
              src="../assets/home/ex04.svg"
              style="width: 100%; height: auto"
            />
          </el-col>
        </el-row>
        <el-divider>
          <i style="color: blue" class="el-icon-orange"></i>
        </el-divider>
      </div>
    </el-row>
    <el-row>
      <div class="title">
        <img alt="genome logo" src="../assets/download.png" />
        Download
      </div>
      <div class="intro">
        <p>
          We downloaded genome sequence data by chromosome from
          <a
            href="http://hgdownload.soe.ucsc.edu/downloads.html"
            target="_blank"
            >UCSC</a
          >
          and transformed the files into bgzip-compressed indexed FASTA (e.g.
          <span style="color: grey; font-style: italic"
            >.fa.gz, .fa.gz.fai, .fa.gz.gzi</span
          >
          files).
        </p>
        <p class="download">
          <a href="/files/downloads/Human-hg38.zip" download="">Human</a>
        </p>
        <p class="download">
          <a href="/files/downloads/Mouse-mm39.zip" download="">Mouse</a>
        </p>
        <p class="download">
          <a href="/files/downloads/Yeast-saccer3.zip" download=""
            >Yeast (S. cerevisiae)</a
          >
        </p>
        <p>
          If you want to get the physicochemical property values used in this
          web, you can download the value files from
          <a href="https://knindex.pufengdu.org/download" target="_blank"
            >KNindex</a
          >.
        </p>
        <el-divider>
          <i style="color: blue" class="el-icon-orange"></i>
        </el-divider>
      </div>
    </el-row>
    <el-row>
      <div class="title">
        <img alt="genome logo" src="../assets/example.png" />
        Example
      </div>
      <div class="intro" style="text-align: center">
        <p style="text-align: left">
          The following image is an example of embedded Jbrowse 2 for
          visualizing our biological sequence values.
        </p>
        <img
          alt="example"
          src="../assets/home/ex01.png"
          style="width: 80%; height: auto"
        />
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
    return {
      minHeight: 0,
    };
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 120;
    console.log(document.documentElement.clientHeight);
    let _this = this;
    window.onresize = () => {
      _this.minHeight = document.documentElement.clientHeight - 120;
    };
  },
};
</script>

<style scoped>
.home {
  min-height: calc(100% - 120px);
  text-align: left;
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
</style>
