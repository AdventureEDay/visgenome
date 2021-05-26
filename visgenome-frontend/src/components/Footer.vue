<template>
  <div id="footer">
    <p>
      Copyright &copy; 2021 College of Intelligence and Computing, Tianjin
      University All rights reserved.
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
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
