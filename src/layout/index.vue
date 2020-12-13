<template>
  <div>
    <div>
      <router-view :key="$route.path"/>
    </div>
    <van-tabbar v-model="active" active-color="#dd3872" inactive-color="#000">
      <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/channel" icon="apps-o">频道</van-tabbar-item>
      <van-tabbar-item replace to="/trends" icon="fire-o" badge="5">动态</van-tabbar-item>
      <van-tabbar-item replace to="/memberpurchase" icon="goods-collect-o">会员购</van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="smile-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  created () {
    console.log('layout')
  }
}
</script>

<style lang="less" scoped>
</style>
