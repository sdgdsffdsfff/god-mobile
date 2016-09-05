<template>
  <li class="report-row"
    :class="{ 'menu-active': menu }"
    v-link="{ name: 'reportDetail', params: {site: data.site}, query: {date: data.date} }"
    v-touch-options:swipe="{ direction: 'horizontal'}"
    v-touch:swipeRight="swipeRight"
    v-touch:swipeleft="swipeLeft">
    <div class="report-item">
      <h2 v-text="data.site"></h2>
      <div>每日邮件报告 —— {{data.date}}</div>
    </div>
    <div class="report-menu">
      <div class="report-menu-item delete" @click.stop="remove(data)">删除</div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
  @import 'src/css/var';

  li.report-row {
    position: relative;
    width: 100%;
    overflow: hidden;

    .report-item {
      z-index: 2;
      box-sizing: border-box;
      height: 5rem;
      width: 100%;
      background: #fff;
      padding: 16px;
      border-bottom: $border;
      transform: translate3d(0, 0, 0);
      transition: transform .5s;

      h2 {
        display: inline-block;
        font-size: 20px;
        vertical-align: 10px;
      }
    }

    .report-menu {
      position: absolute;
      top: 0;
      right: -5rem;
      width: 5rem;
      height: 5rem;
      z-index: 1;
      display: flex;
      transition: transform .5s;
      transform: translate3d(0, 0, 0);

      .report-menu-item {
        width: 100%;
        text-align: center;
        line-height: 5rem;
        color: #fff;
        background: #999;
      }

      .delete {
        background: #ff3737;
      }
    }
  }

  li.report-row.menu-active {
    .report-item {
      transform: translate3d(-5rem, 0, 0);
    }
    .report-menu {
      transform: translate3d(-5rem, 0, 0);
    }
  }
</style>

<script>
  // import Api from 'src/bootstrap/api';

  export default {
    props: ['data', 'remove'],
    data() {
      return {
        swiping: 0,
        menu: false
      };
    },
    methods: {
      swipeLeft() {
        this.menu = true;
      },
      swipeRight() {
        this.menu = false;
      }
    }
  };
</script>