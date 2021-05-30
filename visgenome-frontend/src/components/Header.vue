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
      <el-menu-item index="/" class="logo">
        <img
          src="../assets/titlebar.png"
          alt="iVisgenome"
          style="height: 80%; width: auto"
        />
      </el-menu-item>
      <el-menu-item index="/" class="home">
        <i class="el-icon-s-home"></i>
        Home
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          Tracks
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
      <el-menu-item index="/example" class="example">
        <i class="el-icon-s-data"></i>
        Example
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-orange"></i>
          Circos
        </template>
        <el-menu-item index="/vis_circos/human">Human GRCH38/hg38</el-menu-item>
        <el-menu-item index="/vis_circos/mouse">Mouse GRCm39/mm39</el-menu-item>
        <el-menu-item index="/vis_circos/yeast"
          >SacCer_Apr2011/sacCer3</el-menu-item
        >
      </el-submenu>
      <el-menu-item index="/download" class="download">
        <i class="el-icon-download"></i>
        Download
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-question"></i>
          Help
        </template>
        <el-menu-item index="/help/tutorial">Tutorial</el-menu-item>
        <el-menu-item index="/help/contact">Contact</el-menu-item>
      </el-submenu>
    </el-menu>

    <div class="responsive">
      <div class="logo">
        <img
          src="../assets/titlebar.png"
          alt="iVisgenome"
          style="width: 200px; height:auto; vertical-align: middle;"
        />
      </div>
      <div class="menus">
        <el-popover v-model="visible" trigger="manual" placement="bottom-start" width="300">
          <el-menu
            :default-active="$route.path"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#a5c2a0"
            router
          >
            <el-menu-item index="/" class="home"> Home </el-menu-item>
            <el-submenu index="11">
              <template slot="title"> Tracks </template>
              <el-menu-item index="/genomes/human"
                >Human GRCH38/hg38</el-menu-item
              >
              <el-menu-item index="/genomes/mouse"
                >Mouse GRCm39/mm39</el-menu-item
              >
              <el-menu-item index="/genomes/yeast"
                >SacCer_Apr2011/sacCer3</el-menu-item
              >
            </el-submenu>
            <el-menu-item index="/example" class="example">
              Example
            </el-menu-item>
            <el-submenu index="12">
              <template slot="title"> Circos </template>
              <el-menu-item index="/vis_circos/human"
                >Human GRCH38/hg38</el-menu-item
              >
              <el-menu-item index="/vis_circos/mouse"
                >Mouse GRCm39/mm39</el-menu-item
              >
              <el-menu-item index="/vis_circos/yeast"
                >SacCer_Apr2011/sacCer3</el-menu-item
              >
            </el-submenu>
            <el-menu-item index="/download" class="download">
              Download
            </el-menu-item>
            <el-submenu index="13">
              <template slot="title"> Help </template>
              <el-menu-item index="/help/tutorial">Tutorial</el-menu-item>
              <el-menu-item index="/help/contact">Contact</el-menu-item>
            </el-submenu>
          </el-menu>
          <a
            href="javascript:void(0);"
            slot="reference"
            @click="vis = !vis"
            >&#9776;</a
          >
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activePath: this.$route.path
      vis: false,
      screenWidth: document.body.clientWidth
    };
  },
  mounted(){
    // 监听页面视口宽度
    window.onresize = ()=>{
      this.screenWidth = document.body.clientWidth;
    }
  },
  computed: {
    // 设置这个变量，是因为解决：当屏幕宽度大于1000时，如果弹出菜单是显示状态，菜单不会自动收回的问题
    visible: {
      get: function(){
        return this.screenWidth >= 1000 ? false : this.vis;
      },
      set: function(){
      }
    }
  },
  watch: {
    // 使用节流，防止过度监听
    screenWidth(newValue){
      if(!this.timer){
        this.screenWidth = newValue;
        this.timer = true;
        setTimeout(()=>{
          this.timer = false;
        }, 500)
      }
    }
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
    },
  },
};
</script>

<style scoped>
.webtitle {
  width: 100%;
  height: 60px;
  line-height: 60px;
  overflow: hidden;
}

.header {
  padding-left: 50px;
  height: 100%;
}

.responsive {
  display: none;
}

.home,
.download,
.example {
  font-size: 16px;
  font-weight: bold;
}

.el-menu-item [class^="el-icon-"] {
  font-size: 15px;
}

.el-submenu [class^="el-icon-"] {
  font-size: 15px;
}

.el-menu-item:first-child {
  border: none;
}

@media screen and (max-width: 1000px) {
  .header {
    display: none;
  }
  .responsive {
    padding-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#545c64;
    color: #fff;
    height: 60px;
  }
  .responsive .logo {
    flex-grow: 3;
    text-align: left;
    height: 60px;
    line-height: 60px;
  }
  .responsive .menus {
    flex-grow: 1;
  }
  a {
    color: #a5c2a0;
    font-size: 1.5em;
  }
}
</style>
