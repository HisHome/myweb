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
            name: 'ckEditor',
            menuItemName: '3-3'
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
}
export default {
    ...menu,
    config
};
