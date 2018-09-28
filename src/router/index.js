import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/view/Home'
import List from '@/view/List'
import Info from '@/view/Info'
import Music from '@/view/Music'
import Video from '@/view/Video'
import About from '@/view/About'
import Text from '@/view/Text'
import VideoInfo from '@/components/video/VideoInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // 文章
    { 
      path:'/text',
      name:'text',
      component: Text
    },
    // 图片 
    { 
      path:'/pic',
      name:'pic',
      component: Info
    },
    // 音乐 
    { 
      path:'/music',
      name:'music',
      component: Music
    },
    // 视频
    { 
      path:'/video',
      name:'video',
      component: Video
    },
    { 
      path:'/userPark',
      name:'userPark',
      component: Info
    },
    // 其他
    { 
      path:'/otherList',
      name:'otherList',
      component: Info
    },
    {
      path: '/aboutWeb',
      name: 'aboutWeb',
      component: About,
    },
    {
      path:'*',
      component: Home
    }
  ]
})
