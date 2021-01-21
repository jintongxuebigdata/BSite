<template>
  <div class="home-tab">
    <van-search
      v-model="searchVal"
      show-action
      shape="round"
      placeholder="请输入搜索关键词"
    >
      <template #left>
        <div class="avatar">
          <img src="" alt="" />
        </div>
      </template>
      <template #action>
        <van-icon name="envelop-o" badge="9" size="20" />
      </template>
    </van-search>
    <van-sticky>
      <van-tabs
        animated
        duration="0.7"
        swipeable
        lazy-render
        v-model="currentActiveTab"
        :line-width="comLineWidth"
        title-active-color="#dd3872"
        color="#dd3872"
        @change="changeTabLineWidth"
      >
        <van-tab :title="homeTabList[0].title">
          <keep-alive>
            <Live v-if="curPage === 0" />
          </keep-alive>
        </van-tab>
        <van-tab :title="homeTabList[1].title">
          <keep-alive>
            <Recommend v-if="curPage === 1" />
          </keep-alive>
        </van-tab>
        <van-tab :title="homeTabList[2].title">
          <keep-alive>
            <Hot v-if="curPage === 2" />
          </keep-alive>
        </van-tab>
        <van-tab :title="homeTabList[3].title">
          <keep-alive>
            <Pursue v-if="curPage === 3" />
          </keep-alive>
        </van-tab>
        <van-tab :title="homeTabList[4].title">
          <keep-alive>
            <Movie v-if="curPage === 4" />
          </keep-alive>
        </van-tab>
        <van-tab :title="homeTabList[5].title">
          <keep-alive>
            <Covid v-if="curPage === 5" />
          </keep-alive>
        </van-tab>
        <van-tab :title="homeTabList[6].title">
          <keep-alive>
            <Comfortably v-if="curPage === 6" />
          </keep-alive>
        </van-tab>
      </van-tabs>
    </van-sticky>
  </div>
</template>

<script>
import Covid from '@/views/home/subview/covid-19'
import Hot from '@/views/home/subview/hot'
import Live from '@/views/home/subview/live'
import Movie from '@/views/home/subview/movie'
import Pursue from '@/views/home/subview/pursue'
import Recommend from '@/views/home/subview/recommend'
import Comfortably from '@/views/home/subview/comfortably-off'
export default {
  data () {
    return {
      homeTabList: [
        {
          name: '/home/live',
          title: '直播',
          path: '/home/live'
        },
        {
          name: '/home/recommend',
          title: '推荐',
          path: '/home/recommend'
        },
        {
          name: '/home/hot',
          title: '热门',
          path: '/home/hot'
        },
        {
          name: '/home/pursue',
          title: '追番',
          path: '/home/pursue'
        },
        {
          name: '/home/movie',
          title: '影视',
          path: '/home/movie'
        },
        {
          name: '/home/covid-19',
          title: '抗击肺炎',
          path: '/home/covid-19'
        },
        {
          name: '/home/comfortably-off',
          title: '小康',
          path: '/home/comfortably-off'
        }
      ],
      wordCount: 2,
      currentActiveTab: 1,
      searchVal: '',
      isLoading: false,
      curPage: 1
    }
  },
  components: {
    Covid,
    Hot,
    Live,
    Movie,
    Pursue,
    Recommend,
    Comfortably
  },
  computed: {
    comLineWidth () {
      const wordWidth = 16
      return this.wordCount * wordWidth
    }
  },
  created () {
    console.log('topbar')
  },
  methods: {
    changeTabLineWidth (name, title) {
      this.curPage = name
      this.wordCount = title.length
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
