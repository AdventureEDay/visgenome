<template>
  <div class="footer">
    <p>
      Copyright &copy; 2020 College of Intelligence and Computing, Tianjin
      University All rights reserved.
    </p>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Footer",
  data() {
    return {};
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        // console.log(val, oldVal);
        // eslint-disable-next-line no-unused-vars
        let tmp = val + oldVal;
        //      this.footerAuto();
        $(function() {
          footerAuto();
        });
        function footerAuto() {
          var _wh = $(window).height();
          var _dh = $(document).height();
          // var _bh = $(document.body).height();
          // console.log(_wh, _dh);
          if (_wh == _dh) {
            $(".footer").css({
              position: "fixed",
              bottom: "0",
              left: "0"
            });
          } else {
            // console.log(_dh, _wh);
            $(".footer").css({
              position: "static",
              bottom: "auto",
              left: "auto"
            });
          }
        }
      },
      // 深度观察监听
      deep: true,
      immediate: true
    }
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #545c64;
  height: 100px;
  /* height: 60px; // 加上这句会出错,当页脚固定在底部时，文字不能垂直居中 */
}

.footer p {
  /* height: 90px; */
  padding: 0; /*重要*/
  margin: 0; /*重要*/
  line-height: 100px;
  color: white;
}
</style>
