<template>
  <div class="help">
    <!-- type是在router/index.js中设置的参数 -->
    <!-- <h1>This is {{ $route.params.type }} page</h1> -->
    <com-contact v-if="$route.params.type === 'contact'"></com-contact>
    <com-tutorial v-else-if="$route.params.type === 'tutorial'"></com-tutorial>
  </div>
</template>

<script>
// import contact from "@/views/Contact.vue";
// import tutorial from "@/views/Tutorial.vue";

export default {
  name: "Help",
  data() {
    return {};
  },
  components: {
    // 组件懒加载
    comContact: () => import("@/views/help/Contact.vue"),
    comTutorial: () => import("@/views/help/Tutorial.vue")
  }
};
</script>
