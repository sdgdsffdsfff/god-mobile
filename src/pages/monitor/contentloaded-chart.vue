<template>
  <div class="charts">
    <h3>DOM Ready时间</h3>
    <div id="lineChart" v-el:inlinechart></div>
  </div>
</template>

<style scoped lang="scss">
  #lineChart {
    width: 100%;
    height: 300px;
    margin-left: 12px;
    margin-top: -48px;
    background: transparent!important;
  }

  .charts {
    padding: 16px;
    padding-top: 0;

    h3 {
      padding: 12px 0;
      font-size: 18px;
    }
  }
</style>

<script>
  import Api from 'src/bootstrap/api';
  import initLineOption from './line-option';
  import echarts from 'echarts';
  import { stopPolling, handleCommonError } from 'src/bootstrap/utils';

  export default {
    data() {
      return {
        site: this.$route.params.site,
        pageLoadData: null
      };
    },
    methods: {
      getPageLoadData() {
        stopPolling();
        Api.getPerfReport({paths: this.site, keys: 'contentLoaded'})
        .then(data => {
          this.pageLoadData = data;
          this.initChart(data);
        })
        .catch(handleCommonError);
      },
      polling(chart) {
        window.timer.contentLoad = setInterval(() => {
          Api.getPerfCount({paths: this.site, keys: 'contentLoaded'})
          .then(res => {
            let { time, data } = this.pageLoadData;

            time.shift();
            Object.keys(res.data).forEach(key => {
              data[key].shift();
              data[key].push(res.data[key]);
            });
            time.push(res.time);
            chart.setOption(initLineOption(time, data), true);
          })
          .catch(handleCommonError);
        }, 1000 * 60);
      },
      initChart(data) {
        let inlineChart = echarts.init(this.$els.inlinechart);
        let option = initLineOption(data.time, data.data);
        inlineChart.setOption(option, true);
        this.polling(inlineChart);
      }
    },
    ready() {
      this.getPageLoadData();
    }
  };
</script>
