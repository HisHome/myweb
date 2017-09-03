import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/view/Home'
import List from '@/view/List'
import Info from '@/view/Info'
import Music from '@/view/Music'
import Video from '@/view/Video'
import About from '@/view/About'
import VideoInfo from '@/components/video/VideoInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    { 
      path:'/text',
      name:'text',
      component: Info
    },
    { 
      path:'/pic',
      name:'pic',
      component: Info
    },
    { 
      path:'/music',
      name:'music',
      component: Music
    },
    { 
      path:'/video',
      name:'video',
      component: Video
    },
    { 
      path:'/user-park',
      name:'user-park',
      component: Info
    },
    { 
      path:'/other-list',
      name:'otherList',
      component: Info
    },
    {
      path: '/about-web',
      name: 'about-web',
      component: About,
    },
    {
      path: '/about-person',
      name: 'about-person',
      component: About,
    },
    {
      path: '/about-other',
      name: 'about-other',
      component: About,
    },
    {
      path:'*',
      component: Home
    }
  ]
})
