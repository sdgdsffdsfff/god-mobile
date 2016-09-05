<template>
  <mt-header fixed title="报告详情">
    <div slot="left">
      <mt-button v-link="{ name: 'report' }" icon="back"></mt-button>
    </div>
  </mt-header>
  <div class="container">
    <iframe :src.sync="reportUrl" width="100%" height="600" frameborder="0"></iframe>
  </div>
</template>

<style>
  iframe {
    margin-top: -16px;
    height: 600px;
    overflow-y: scroll;
  }
</style>

<script>
  const BASE_URL = 'https://perf.ele.me/v2/site/report';

  export default {
    data() {
      return {
        reportUrl: `${BASE_URL}?site=${this.$route.params.site}&date=${this.$route.query.date}`
      };
    }
  };
</script>