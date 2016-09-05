<template>
  <mt-header fixed title="个人中心"></mt-header>
  <div class="container">
    <div class="profile">
      <mt-cell is-link v-link="{ name: 'profileDetail' }">
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
      <mt-cell title="关于god" is-link v-link="{ name: 'about' }"></mt-cell>
    </div>
    <div class="email">
      <mt-cell title="每日邮件报告">
        <mt-switch :value.sync="user.dayReport"></mt-switch>
      </mt-cell>
      <mt-cell title="实时报错通知">
        <mt-switch :value.sync="user.errorReport"></mt-switch>
      </mt-cell>
    </div>

    <div class="logout" @click="sheetVisible = true">
      <span class="iconfont icon-logout"></span>
      退出登录
    </div>
    <mt-actionsheet
      :actions="actions"
      :visible.sync="sheetVisible">
    </mt-actionsheet>
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
    margin-bottom: 24px;
    border-top: $border;
    border-bottom: $border;
    padding: 12px;
    text-align: center;
    color: #fff;
  }
</style>

<script>
  import Api from 'src/bootstrap/api';
  import { MessageBox } from 'mint-ui';
  import { handleCommonError } from 'src/bootstrap/utils';

  export default {
    data() {
      return {
        actions: [
          {
            name: '确定退出',
            method: this.logout
          }
        ],
        sheetVisible: false
      };
    },
    vuex: {
      getters: {
        user: state => state.user
      }
    },
    watch: {
      'user.dayReport'(val) {
        if (!val) {
          this.closeDayReport();
        } else {
          this.updateDayReport('dayReport', true);
        }
      },
      'user.errorReport'(val) {
        if (!val) {
          this.closeErrorReport();
        } else {
          this.updateDayReport('errorReport', true);
        }
      }
    },
    methods: {
      logout() {
        Api.logout();
      },
      closeDayReport() {
        MessageBox.confirm('关闭后将不会收到每日邮件报告', '确认关闭吗？')
        .then(() => {
          this.updateDayReport('dayReport', false);
        })
        .catch(() => {
          this.user.dayReport = true;
        });
      },
      closeErrorReport() {
        MessageBox.confirm('关闭后将不在收到报警通知邮件', '确认关闭吗？')
        .then(action => {
          this.updateDayReport('errorReport', false);
        })
        .catch(() => {
          this.user.errorReport = true;
        });
      },
      updateDayReport(key, value) {
        Api.updateEmail({
          key,
          value
        })
        .then(() => {
          this.user[key] = value;
        })
        .catch(handleCommonError);
      }
    }
  };
</script>
i