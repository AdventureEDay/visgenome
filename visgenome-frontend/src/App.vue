<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
html,
body,
#app {
  /*多个字体，保持浏览器最大兼容*/
  font-family: Verdana, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c1c1d;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  /* 以下格式保证了占满整个屏幕---- */
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  /* ----------- */
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

.el-submenu__title {
  font-size: 16px !important;
  font-weight: bold !important;
}
</style>
