<template>
  <router-view></router-view>
  <eleme-tabbar></eleme-tabbar>
</template>

<style lang="scss">
  @import 'src/css/var';
  @import 'src/css/markdown';

  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    box-sizing: border-box;
    background: $bodyColor;
  }
  ul {
    padding-left: 0;
    margin: 0;
    list-style: none;
  }
  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
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
  .container {
    position: relative;
    margin-top: 60px;
    margin-bottom: 60px;
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  p {
    text-align: center;
  }
  .mint-tabbar>.mint-tab-item.is-selected {
    background-color: $mainColor;
    color: #fff;
  }
  .mint-switch-core:checked {
    border-color: $mainColor;
    background-color: $mainColor;
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
      getters: {
        sites: state => state.sites
      },
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
