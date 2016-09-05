<template>
  <mt-header fixed title="网站监控"></mt-header>
  <div class="container">
    <ul class="sites-list">
      <monitor-item
        v-for="site in markSites"
        :remove="remove"
        :data.sync="site">
      </monitor-item>
    </ul>
  </div>
</template>
<style>
  .sites-list {
    margin-bottom: 24px;
  }
</style>
<script>
  export default {
    components: {
      'monitor-item': require('src/components/monitor-item')
    },
    vuex: {
      getters: {
        markSites: state => state.sites
      }
    },
    methods: {
      remove(item) {
        this.markSites.$remove(item);
      }
    }
  };
</script>