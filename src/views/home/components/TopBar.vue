<template>
  <div class="home-tab">
    <van-search
        v-model="value"
        show-action
        shape="round"
        placeholder="请输入搜索关键词"
      >
        <template #left>
          <div class="avatar">
            <img src="" alt="">
          </div>
        </template>
        <template #action>
          <van-icon name="envelop-o" badge="9" size="20"/>
        </template>
      </van-search>
      <van-tabs
        sticky
        animated
        duration=0.7
        swipeable
        lazy-render
        v-model="currentActiveTab"
        :line-width="comLineWidth"
        title-active-color="#dd3872"
        color = "#dd3872"
        @change="changeTabLineWidth"
        >
          <van-tab
            v-for="item in homeTabList"
            :title="item.title"
            :key="item"
            >
          <van-pull-refresh
           v-model="isLoading"
           @refresh="onRefresh"
           >
            <router-view/>
          </van-pull-refresh>
          </van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeTabList: [
        {
          title: '直播',
          path: '/home/live'
        },
        {
          title: '推荐',
          path: '/home/recommend'
        },
        {
          title: '热门',
          path: '/home/hot'
        },
        {
          title: '追番',
          path: '/home/pursue'
        },
        {
          title: '影视',
          path: '/home/movie'
        },
        {
          title: '抗击肺炎',
          path: '/home/covid-19'
        },
        {
          title: '小康',
          path: '/home/comfortably-off'
        }
      ],
      wordCount: 2,
      currentActiveTab: 1,
      isLoading: false
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
      console.log(name)
      this.wordCount = title.length
      this.$router.push(this.homeTabList[name].path)
    },
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.home-tab {
  overflow: hidden;
  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: pink;
  }
}
</style>
