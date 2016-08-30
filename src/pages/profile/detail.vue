<template>
  <mt-header fixed :title="user.name">
    <div slot="left">
      <mt-button v-link="{ name: 'profile' }" icon="back"></mt-button>
    </div>
  </mt-header>
  <div class="container">
    <mt-cell title="姓名" :value="user.name"></mt-cell>
    <mt-cell title="邮箱" :value="user.email"></mt-cell>
    <mt-cell title="手机" :value="user.mobile | convertToString"></mt-cell>
  </div>
</template>

<script>
  export default {
    vuex: {
      getters: {
        user: state => state.user
      }
    }
  };
</script>