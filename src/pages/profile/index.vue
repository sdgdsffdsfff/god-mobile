<template>
  <mt-header fixed title="个人中心"></mt-header>
  <div class="container">
    <div class="profile">
      <mt-cell is-link v-link="{ name: 'detail' }">
        <div slot="title">
          <div class="avator">
            <img src="https://gravatar.com/avatar/?s=60&d=identicon" alt="avator">
          </div>
          <div class="desc">
            <span class="username" v-text="user.name"></span>
            <span v-text="user.email"></span>
          </div>
        </div>
      </mt-cell>
      <mt-cell title="关于god" is-link></mt-cell>
    </div>
    <div class="email">
      <mt-cell title="每日邮件报告">
        <mt-switch></mt-switch>
      </mt-cell>
      <mt-cell title="实时报错通知">
        <mt-switch></mt-switch>
      </mt-cell>
    </div>

    <div class="logout">
      <span class="iconfont icon-logout"></span>
      退出登录
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'src/css/var';

  .avator,
  .desc {
    display: inline-block;
  }

  .avator {
    img {
      border-radius: 50%;
    }
  }

  .desc {
    vertical-align: -16px;
    margin-left: 8px;

    span {
      display: block;
    }
    .username {
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .profile, .email {
    margin-bottom: 40px;
  }

  .logout {
    background: $dangerColor;
    border-top: $border;
    border-bottom: $border;
    padding: 12px;
    text-align: center;
    color: #fff;
  }
</style>

<script>
  export default {
    vuex: {
      getters: {
        user: state => state.user
      }
    }
  };
</script>
i