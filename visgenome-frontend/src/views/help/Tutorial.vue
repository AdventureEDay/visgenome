<template>
  <div class="tutorial">
    <h1>This is Tutorial page</h1>
  </div>
</template>

<script>
export default {
  name: "Tutorial",
  data() {
    return {
      view: "front"
    };
  },
  mounted() {
    let view = this.view;
    this.axios.post("/api/users", { view }).then(response => {
      console.log(response);
    });
  }
};
</script>
