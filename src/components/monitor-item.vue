<template>
  <li class="site-row"
    :class="{ 'menu-active': menu }"
    v-link="{ name: 'monitorDetail', params: {site: data} }"
    v-touch:swipeRight="swipeRight"
    v-touch:swipeleft="swipeLeft">
    <div class="site-item">
      <div class="row">
        <img src="~src/assets/web.png" alt="site-icon" class="site-icon">
        <h2 v-text="data"></h2>
      </div>
      <div class="site-desc">
         <div class="site-desc-item">
           <span class="circle count"></span>
           日访问量：2000次
         </div>
         <div class="site-desc-item">
           <span class="circle error"></span>
           日报错量：1600次
         </div>
      </div>
    </div>
    <div class="site-menu">
      <div class="site-menu-item">置顶</div>
      <div class="site-menu-item delete" @click.stop="unmark">取关</div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
  @import 'src/css/var';

  li.site-row {
    position: relative;
    width: 100%;
    overflow: hidden;

    .site-item {
      z-index: 2;
      box-sizing: border-box;
      height: 6rem;
      width: 100%;
      background: #fff;
      padding: 16px;
      font-size: 14px;
      border-bottom: $border;
      transform: translate3d(0, 0, 0);
      transition: transform .5s;

      .row {
        margin-bottom: 6px;
      }

      img {
        width: 40px;
        height: 40px;
      }

      h2 {
        display: inline-block;
        font-size: 20px;
        vertical-align: 10px;
        margin-left: 12px;
      }

      .site-desc {
        overflow: hidden;

        .site-desc-item {
          float: left;
          width: 50%;

          .circle {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: $mainColor;
          }

          .count {
            background: $successColor;
          }

          .error {
            background: $dangerColor;
          }
        }
      }
    }

    .site-menu {
      position: absolute;
      top: 0;
      right: -10rem;
      width: 10rem;
      height: 6rem;
      z-index: 1;
      display: flex;
      transition: transform .5s;
      transform: translate3d(0, 0, 0);

      .site-menu-item {
        width: 50%;
        text-align: center;
        line-height: 6rem;
        color: #fff;
        background: #999;
      }

      .delete {
        background: #ff3737;
      }
    }
  }

  li.site-row.menu-active {
    .site-item {
      transform: translate3d(-10rem, 0, 0);
    }
    .site-menu {
      transform: translate3d(-10rem, 0, 0);
    }
  }
</style>

<script>
  import Api from 'src/bootstrap/api';

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
      },
      unmark() {
        Api.unMarkSite({host: this.data})
        .then(() => {
          this.remove(this.data);
        });
      }
    }
  };
</script>