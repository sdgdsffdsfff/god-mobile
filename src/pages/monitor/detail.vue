<template>
   <mt-header fixed :title="$route.params.site">
     <div slot="left">
       <mt-button v-link="{ name: 'monitor' }" icon="back"></mt-button>
     </div>
   </mt-header>
   <div class="container">
     <div class="charts">
       <contentloaded-chart></contentloaded-chart>
       <pageloaded-chart></pageloaded-chart>
       <count-chart></count-chart>
       <error-chart></error-chart>
     </div>
   </div>
</template>

<style scoped>
  .charts {
    background: #fff;
  }
</style>

<script>
  export default {
    components: {
      'contentloaded-chart': require('./contentloaded-chart.vue'),
      'count-chart': require('./count-chart.vue'),
      'error-chart': require('./error-chart.vue'),
      'pageloaded-chart': require('./pageloaded-chart.vue')
    }
  };
</script>