<template>
  <div class="container">
    <div class="title">
      <img alt="genome logo" src="../assets/download.png" />
      Download
    </div>
    <div class="intro">
      <p>
        We downloaded genome sequence data by chromosome from
        <a href="http://hgdownload.soe.ucsc.edu/downloads.html" target="_blank"
          >UCSC</a
        >
        and transformed the files into bgzip-compressed indexed FASTA (e.g.
        <span style="color: grey; font-style: italic"
          >.fa.gz, .fa.gz.fai, and .fa.gz.gzi</span
        >
        files). You can download these files on this page.
      </p>
      <p class="download">
        <img
          src="../assets/download/download.png"
          alt="download icon"
          class="icon"
        />
        <a href="/files/downloads/Human-hg38.zip" download="">Human</a>
      </p>
      <p class="download">
        <img
          src="../assets/download/download.png"
          alt="download icon"
          class="icon"
        />
        <a href="/files/downloads/Mouse-mm39.zip" download="">Mouse</a>
      </p>
      <p class="download">
        <img
          src="../assets/download/download.png"
          alt="download icon"
          class="icon"
        />
        <a href="/files/downloads/Yeast-saccer3.zip" download=""
          >Yeast (S. cerevisiae)</a
        >
      </p>
      <el-divider>
        <i style="color: blue" class="el-icon-orange"></i>
      </el-divider>
      <p>
        If you want to get the physicochemical property values used in this web,
        you can download the value files from
      </p>
      <p class="download">
        <a href="https://knindex.pufengdu.org/download" target="_blank"
          ><img
            src="../assets/download/link.png"
            alt="link icon"
            class="inline-icon"
          />KNindex</a
        >
      </p>
      <el-divider>
        <i style="color: blue" class="el-icon-orange"></i>
      </el-divider>
      <p>
        For the users who want to host iVisGenome themselves for in-house
        academic purpose, we provide all source codes of iVisgenome, which can
        be obtained from the GitHub repository:
      </p>
      <p class="download">
        <a href="https://github.com/wyzhang0401/visgenome" target="_blank">
          <img
            src="../assets/github.png"
            alt="github logo"
            class="inline-icon"
          />https://github.com/wyzhang0401/visgenome</a
        >
      </p>
      <el-divider>
        <i style="color: blue" class="el-icon-orange"></i>
      </el-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: "download",
  data() {
    return {};
  },
};
</script>


<style scoped>
p {
  line-height: 2em;
}
.container {
  min-height: calc(100% - 120px);
  text-align: left;
}

.title {
  height: 80px;
  line-height: 80px;
  font-size: 1.5em;
  text-align: center;
  background: #f5f5dc;
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

.icon {
  height: 2em;
  vertical-align: middle;
}

a {
  font-style: italic;
  font-weight: bolder;
  color: #a5c2a0;
}

.inline-icon {
  height: 1em;
  vertical-align: middle;
  margin: 0 5px;
}
</style>