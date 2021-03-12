<template>
  <div class="contact">
    <p>
      For any suggestions, technical issues, data depositions and error reports,
      please contact Dr. Pu-Feng Du by email (<a href="mailto:pdu@tju.edu.cn"
        >pdu@tju.edu.cn</a
      >).
    </p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {};
  }
};
</script>

<style scoped>
.contact {
  min-height: inherit;
}

p {
  font-size: 20px;
  height: 1.5em;
  line-height: 1.5em;
  text-align: justify;
  /* text-align: justify; 靠左对齐 */
  padding: 10px 30px;
  margin: 0; /*重要，第一行时h或者p标签内容，会有margin，使得整个页面和header之间有空隙，这样的话当页面内容不满一页时，把footer固定在页面底端时效果不好*/
}
</style>
