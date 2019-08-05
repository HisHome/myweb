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
import Movie from '@/view/Movie'
import UserPark from '@/view/UserPark'
import OtherList from '@/view/OtherList'
import VideoInfo from '@/components/video/VideoInfo'

import Other from '@/view/other/Other'
import WangEditor from '@/view/other/WangEditor'
import Tinymce from '@/view/other/Tinymce'
import CKEditor5 from '@/view/other/CKEditor5'
import CKEditor4 from '@/view/other/CKEditor4'
import SVG from '@/view/other/SVG'
import Html2canvas from '@/view/other/Html2canvas'

import Createjs from '@/view/createjs/Createjs'
import Easeljs from '@/view/createjs/Easeljs'
import Tweenjs from '@/view/createjs/Tweenjs'
import Soundjs from '@/view/createjs/Soundjs'
import Preloadjs from '@/view/createjs/Preloadjs'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // 电影
    {
      path:'/movie',
      name:'movie',
      component: Movie
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
                component: CKEditor5
            },
            {
                path: 'ckEditor4',
                name: 'ckEditor4',
                component: CKEditor4
            },
            {
                path: 'svg',
                name: 'svg',
                component: SVG
            },
            {
                path: 'html2canvas',
                name: 'html2canvas',
                component: Html2canvas
            }
        ]
    },
    {   path: '/createjs',
        component: Createjs,
        children: [
            {
                path: 'easeljs',
                name: 'easeljs',
                component: Easeljs
            },
            {
                path: 'tweenjs',
                name: 'tweenjs',
                component: Tweenjs
            },
            {
                path: 'soundjs',
                name: 'soundjs',
                component: Soundjs
            },
            {
                path: 'preloadjs',
                name: 'preloadjs',
                component: Preloadjs
            }
        ]
    },
    {
      path:'*',
      component: Home
    }
  ]
})
