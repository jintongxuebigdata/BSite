<template>
  <div>
    <div>
      <router-view :key="$route.path"/>
    </div>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  name: 'layout',
  components: {
    Tabbar
  }
}
</script>

<style lang="less" scoped>

</style>
