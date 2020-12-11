<template>
  <div class="tab-bar">
    <ul>
      <li><router-link active-class="active" to="/home">首页</router-link></li>
      <li><router-link active-class="active" to="/channel">频道</router-link></li>
      <li><router-link active-class="active" to="/trends">动态</router-link></li>
      <li><router-link active-class="active" to="/memberpurchase">会员购</router-link></li>
      <li><router-link active-class="active" to="/profile">我的</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88px;
    border-top: 1px solid #f5f5f5;
    // @media screen and (-webkit-min-device-pixel-ratio: 2) {
    //   border-top: 0.5px solid #999
    // }
    // @media screen and (-webkit-min-device-pixel-ratio: 3) {
    //   border-top: 0.333333px solid #999
    // }
    li {
      flex: 1;
      text-align: center;
    }
    .active {
      color: deeppink;
    }
  }
}
</style>
