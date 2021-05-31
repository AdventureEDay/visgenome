<template>
  <div class="help">
    <el-row class="title">
      <img alt="home logo" src="../assets/help.png" />
      Tutorial
    </el-row>
    <el-collapse v-model="activeName" accordion class="content">
      <el-collapse-item title="1. Overview" name="1">
        <div>整体介绍</div>
      </el-collapse-item>
      <el-collapse-item title="2. Tracks help" name="2">
        <div>Tracks介绍</div>
      </el-collapse-item>
      <el-collapse-item title="3. Circos help" name="3">
        <div>Circos介绍</div>
      </el-collapse-item>
      <el-collapse-item title="4. Download help" name="4">
        <div>Download说明</div>
      </el-collapse-item>
      <el-collapse-item title="5. Contact" name="5">
        <p>
          For any suggestions, technical issues, data depositions and error
          reports, please contact Dr. Pu-Feng Du by email (<a
            href="mailto:pdu@tju.edu.cn"
            >pdu@tju.edu.cn</a
          >).
        </p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      activeName: "",
    };
  },
};
</script>

<style scoped lang="less">
.help {
  min-height: calc(100% - 120px);
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
