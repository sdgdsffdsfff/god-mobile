<template>
  <mt-tabbar :fixed="true">
    <mt-tab-item
      :id="tab.name"
      v-for="tab in tabs"
      v-link="{ name: tab.key }">
      <span class="iconfont icon-{{tab.key}}" slot="icon"></span>
      {{tab.name}}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  const tabs = [
    {
      key: 'report',
      name: '每日报告',
      icon: 'http://placehold.it/100x100'
    },
    {
      key: 'monitor',
      name: '网站监控',
      icon: 'http://placehold.it/100x100'
    },
    {
      key: 'profile',
      name: '个人中心',
      icon: 'http://placehold.it/100x100'
    }
  ];

  export default {
    data() {
      return {
        tabs
      };
    }
  };
</script>