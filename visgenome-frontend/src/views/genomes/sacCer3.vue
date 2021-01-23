<template>
  <div class="insert">
    <h1>{{ msg }}</h1>
    <!-- <h1>This is {{ $route.params.type }} page</h1> -->
    <iframe src="/linear/saccer3/index.html" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: "Yeast",
  data() {
    return {};
  },
  props: ["msg"]
};
</script>
