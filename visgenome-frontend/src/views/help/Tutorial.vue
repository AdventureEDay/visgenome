<template>
  <div class="tutorial">
    <el-row class="title">
      <img alt="home logo" src="../../assets/help.png" />
      Tutorial
    </el-row>
    <el-collapse v-model="activeName" accordion class="content">
      <el-collapse-item title="1. Overview" name="1">
        <div>
          整体介绍
        </div>
      </el-collapse-item>
      <el-collapse-item title="2. Tracks help" name="2">
        <div>Tracks介绍</div>
      </el-collapse-item>
      <el-collapse-item title="3. Circos help" name="3">
        <div>
          Circos介绍
        </div>
      </el-collapse-item>
      <el-collapse-item title="4. Download help" name="4">
        <div>
          Download说明
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "Tutorial",
  data() {
    return {
      activeName: ""
    };
  }
};
</script>

<style scoped lang="less">
.tutorial {
  min-height: inherit;
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

.content {
  margin: 10px auto;
  padding: 100px;
}

/deep/ .el-collapse-item__header {
  font-size: 18px;
}
</style>
