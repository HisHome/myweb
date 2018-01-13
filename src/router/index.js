import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/view/Home'
// import List from '@/view/List'
import Info from '@/view/Info'
import Music from '@/view/Music'
import Video from '@/view/Video'
import About from '@/view/About'
import Text from '@/view/Text'
// import VideoInfo from '@/components/video/VideoInfo'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        // 文章
        {
            path: '/text',
            name: 'text',
            component: Text
        },
        // 图片
        {
            path: '/pic',
            name: 'pic',
            component: Info
        },
        // 音乐
        {
            path: '/music',
            name: 'music',
            component: Music
        },
        // 视频
        {
            path: '/video',
            name: 'video',
            component: Video
        },
        // 社区
        {
            path: '/user-park',
            name: 'user-park',
            component: Info
        },
        // 其他
        {
            path: '/other-list',
            name: 'otherList',
            component: Info
        }, {
            path: '/about-web',
            name: 'about-web',
            component: About
        },
        // 关于我们
        {
            path: '/about-person',
            name: 'about-person',
            component: About
        }, {
            path: '*',
            component: Home
        }
    ]
})
