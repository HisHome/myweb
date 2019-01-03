const menu = {
    catalogue: [
        {
            routerName: 'text',
            name: '文章',
            menuItemName: '2-1'
        },
        {
            routerName: 'pic',
            name: '图片',
            menuItemName: '2-2'
        },
        {
            routerName: 'music',
            name: '音乐',
            menuItemName: '2-3'
        },
        // {
        //     routerName: 'video',
        //     name: '视频',
        //     menuItemName: '2-4'
        // },
        {
            routerName: 'game',
            name: '游戏',
            menuItemName: '2-7'
        },
    ],
    otherList: [
        {
            routerName: 'userPark',
            name: '用户社区',
            menuItemName: '2-5'
        },
        {
            routerName: 'otherList',
            name: '其他',
            menuItemName: '2-6'
        },
    ],
    other: [
        {
            routerName: 'wangEditor',
            name: 'wangEditor',
            menuItemName: '3-1'
        },
        {
            routerName: 'tinymce',
            name: 'tinymce',
            menuItemName: '3-2'
        },
        {
            routerName: 'ckEditor',
            name: 'ckEditor5',
            menuItemName: '3-3'
        },
        {
            routerName: 'ckEditor4',
            name: 'ckEditor4',
            menuItemName: '3-4'
        },
        {
            routerName: 'svg',
            name: 'svg',
            menuItemName: '3-5'
        },
    ],
    createjs: [
        {
            routerName: 'easeljs',
            name: 'easeljs',
            menuItemName: '4-1'
        },
        {
            routerName: 'tweenjs',
            name: 'tweenjs',
            menuItemName: '4-2'
        },
        {
            routerName: 'soundjs',
            name: 'soundjs',
            menuItemName: '4-3'
        },
        {
            routerName: 'preloadjs',
            name: 'preloadjs',
            menuItemName: '4-4'
        },
    ],

}
// routerName 和对应的 menuItemName
const config = {
        home: '1',
        text: '2-1',
        pic: '2-2',
        music: '2-3',
        video: '2-4',
        userPark: '2-5',
        otherList: '2-6',
        game: '2-7',
        wangEditor: '3-1',
        tinymce:'3-2',
        ckEditor: '3-3',
        ckEditor4: '3-4',
        svg: '3-5',
        easeljs:'4-1',
        tweenjs:'4-2',
        soundjs:'4-3',
        preloadjs:'4-4',
}
export default {
    ...menu,
    config
};
