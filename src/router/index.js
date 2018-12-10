import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/view/Home'
import List from '@/view/List'
import Info from '@/view/Info'
import Music from '@/view/Music'
import Video from '@/view/Video'
import Game from '@/view/Video'

import Pic from '@/view/Picture'
import About from '@/view/About'
import Text from '@/view/Text'
import UserPark from '@/view/UserPark'
import OtherList from '@/view/OtherList'
import VideoInfo from '@/components/video/VideoInfo'

import Other from '@/view/other/Other'
import WangEditor from '@/view/other/WangEditor'
import Tinymce from '@/view/other/Tinymce'
import CKEditor from '@/view/other/CKEditor'


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
      component: Pic
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
      path:'/game',
      name:'game',
      component: Game
    },
    {
      path:'/userPark',
      name:'userPark',
      component: UserPark
    },
    // 其他
    {
      path:'/otherList',
      name:'otherList',
      component: OtherList
    },
    {
      path: '/aboutWeb',
      name: 'aboutWeb',
      component: About,
    },
    {   path: '/other',
        component: Other,
        children: [
            {
                path: 'wangEditor',
                name: 'wangEditor',
                component: WangEditor
            },
            {
                path: 'tinymce',
                name: 'tinymce',
                component: Tinymce
            },
            {
                path: 'ckEditor',
                name: 'ckEditor',
                component: CKEditor
            }
        ]
    },
    {
      path:'*',
      component: Home
    }
  ]
})
