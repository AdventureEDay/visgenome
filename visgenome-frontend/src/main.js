import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUi from "element-ui";
// element-ui的样式表
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(ElementUi);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
