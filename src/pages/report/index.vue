<template>
  <mt-header fixed title="每日报告"></mt-header>
  <div class="container">
    <div class="report-wrapper">
      <ul class="report-list"
         v-infinite-scroll="loadMore()"
         infinite-scroll-distance="50"
         :infinite-scroll-disabled="loading">
        <report-item
          v-for="item in reportList"
          :remove="remove"
          :data.sync="item">
        </report-item>
      </ul>
    </div>
  </div>
  <p v-show="loading">玩命加载中...</p>
</template>

<style>
  .report-wrapper {
    height: 640px;
  }
</style>
<script>
  import Api from 'src/bootstrap/api';
  import { handleCommonError } from 'src/bootstrap/utils';

  export default {
    components: {
      'report-item': require('src/components/report-item')
    },
    data() {
      return {
        loading: false,
        reportList: [],
        currentPage: 1,
        pageLimit: 6
      };
    },
    vuex: {
      getters: {
        sites: state => state.sites
      }
    },
    methods: {
      fetchReportList(page) {
        Api.getReportList({
          page,
          limit: this.pageLimit
        })
        .then(data => {
          this.reportList.push(...data);
          this.loading = false;
        })
        .catch(handleCommonError);
      },
      loadMore() {
        this.loading = true;
        this.fetchReportList(this.currentPage++);
      },
      remove(item) {
        this.reportList.$remove(item);
      }
    },
    ready() {
      this.fetchReportList(1);
    }
  };
</script>