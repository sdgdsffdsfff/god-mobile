<template>
  <mt-header fixed title="关于god">
    <div slot="left">
      <mt-button v-link="{ name: 'profile' }" icon="back"></mt-button>
    </div>
  </mt-header>
  <div class="container">
    <div class="markdown-body">
      <content></content>
    </div>
  </div>
</template>
<style scoped>
  .markdown-body {
    padding: 12px;
    background: #fff;
  }
</style>
<script>
  export default {
    components: {
      'content': require('./god.md')
    }
  };
</script>
