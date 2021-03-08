<template>
  <div id="footer" style="">
    <p>
      Copyright &copy; 2020 College of Intelligence and Computing, Tianjin
      University All rights reserved.
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  mounted() {
    this.footerAuto();
  },
  // watch是一个对象
  // watch: {
  //   $route: "footerAuto"
  // },
  watch: {
    $route: {
      handler(newRoute, oldRoute){
        // 路由发生变化时，绑定页面滚动事件
        console.log(newRoute, oldRoute);
        this.footerAuto();
      }
    }
  },
  methods: {
    footerAuto() {
      // var _wh = document.documentElement.clientHeight;
      const _wh = window.innerHeight; // 文档显示区，不包括工具栏和滚动条
      // 路由发生变化后，获取的文档还是上一个路由的文档
      const _dh = document.documentElement.scrollHeight; // 文档的高度，包括滚动条
      if (_wh == _dh) {
        document.getElementById("footer").style.position = "fixed";
        document.getElementById("footer").style.bottom = "0";
        document.getElementById("footer").style.left = "0";
        console.log(_wh, _dh, document.getElementById("footer"));
      } else {
        document.getElementById("footer").style.position = "static";
        document.getElementById("footer").style.bottom = "auto";
        document.getElementById("footer").style.left = "auto";
        console.log(_wh, _dh, document.getElementById("footer"));
      }
    }
  }
};
</script>

<style scoped>
#footer {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #545c64;
  height: 60px;
}

#footer p {
  /* height: 90px; */
  padding: 0; /*重要*/
  margin: 0; /*重要*/
  line-height: 60px;
  color: white;
}
</style>

// import $ from "jquery"; // export default { // name: "Footer", // data() { //
return {}; // }, // watch: { // $route: { // handler: function(val, oldVal) { //
// console.log(val, oldVal); // // eslint-disable-next-line no-unused-vars //
let tmp = val + oldVal; // // this.footerAuto(); // $(function() { //
footerAuto(); // }); // function footerAuto() { // var _wh = $(window).height();
// var _dh = $(document).height(); // // var _bh = $(document.body).height(); //
// console.log(_wh, _dh); // if (_wh == _dh) { // $(".footer").css({ //
position: "fixed", // bottom: "0", // left: "0" // }); // } else { // //
console.log(_dh, _wh); // $(".footer").css({ // position: "static", // bottom:
"auto", // left: "auto" // }); // } // } // }, // // 深度观察监听 // deep: true,
// immediate: true // } // } // };
