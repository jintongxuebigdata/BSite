<template>
  <div>
    <div>Profile Page</div>
    <div v-if="!nickname">
      <div><label for="in-box-1"><span>账号:</span><input id="in-box-1" type="text" v-model="username"></label></div>
      <div><label for="in-box-2"><span>密码:</span><input id="in-box-2" type="password" v-model="password"></label></div>
      <div><button @click="_login">登录</button></div>
    </div>
    <div v-else>
      <div>{{nickname}}</div>
      <div>
        <img :src="avatar" alt="">
      </div>
      <div><button @click="_logout">注销</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      username: '',
      password: '',
      nickname: '',
      avatar: ''
    }
  },
  created () {
    const { username, nickname, avatar } = Storage.getLocalStorage('user-info')
    this.username = username
    this.nickname = nickname
    this.avatar = avatar
  },
  methods: {
    _login () {
      this.$store.dispatch('user/login_action', { username: this.username.trim(), password: this.password })
    },
    _logout () {
      this.$store.dispatch('user/logout_action', { username: this.username })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
