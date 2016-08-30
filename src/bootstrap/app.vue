<template>
  <router-view></router-view>
  <eleme-tabbar></eleme-tabbar>
</template>

<style lang="scss">
  @import 'src/css/var';

  body {
    margin: 0;
    background: $bodyColor;
  }
  a {
  	text-decoration: none;
    display: inline-block;
    color: $mainColor;
  }

  .mint-header {
  	background: $mainColor;
  	height: 60px;
  	font-size: 18px;

  	h1 {
  		font-weight: 300;
  	}
  }
</style>

<script>
  import { loadUser } from 'src/vuex/actions';
  import store from 'src/vuex/store';

  export default {
    name: 'app',
    store,
    replace: false,
    vuex: {
      actions: {
        loadUser
      }
    },
    components: {
      'eleme-tabbar': require('src/components/tabbar')
    },
    ready() {
      this.loadUser();
    }
  };
</script>
