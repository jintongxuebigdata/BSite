<template>
  <div>
    <div>Home Page</div>
    <div class="home-tab">
      <van-tabs
        animated
        swipeable
        lazy-render
        :line-width="comLineWidth"
        color = "#dd3872"
        @change="changeTabLineWidth"
        >
        <van-tab
          v-for="(item, index) in homeTabList"
          :title="item"
          :key="index"
          >
          内容 {{ item }}
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      homeTabList: ['直播', '推荐', '热门', '追番', '影视', '抗击肺炎', '小康'],
      wordCount: 2
    }
  },
  computed: {
    comLineWidth () {
      const wordWidth = 16
      return this.wordCount * wordWidth
    }
  },
  methods: {
    changeTabLineWidth (name, title) {
      this.wordCount = title.length
    }
  }
}
</script>

<style lang="less" scoped>
.home-tab {
  overflow: hidden;
}
</style>
