import emoji from "@/tool/emoji.js";

const config = {
    wangEditorCustomConfig: {
        menus: [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ],
        emotions: [
            {
                // tab 的标题
                title: '默认',
                // type -> 'emoji' / 'image'
                type: 'emoji',
                // content -> 数组
                content: ['😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😗','😙','😚','😇','😐','😑','😶','😏','😣','😥','😮','😯','😪','😫','😴','😌','😛','😜','😝','😒','😓','😔','😕','😲','😷','😖','😞','😟','😤','😢','😭','😦','😧','😨','😬','😰','😱','😳','😵','😡','😠']

            },
            {
                // tab 的标题
                title: '新浪',
                // type -> 'emoji' / 'image'
                type: 'image',
                // content -> 数组
                content: emoji.weibo.map((item)=>{
                    return {
                        alt: item.phrase,
                        src: item.url,
                    }
                })
            },

        ],
        showLinkImg: false,
        uploadImgMaxSize: 3 * 1024 * 1024,
        uploadImgMaxLength: 1,
        customUploadImg:function(files, insert){
            /* 创建Ajax并提交 */
            let xhr = new XMLHttpRequest();
            let fileForm = new FormData();
            fileForm.append('fileUsageType', 26);
            fileForm.append('file', files[0]);
            xhr.open('POST', 'http://img.huitong.com/api/upload/file');
            xhr.onload = function (data) {
                let response = JSON.parse(data.currentTarget.response);
                if (response.status === 0) {
                    console.log(response.data.fileKey)
                    insert('http://img.huitong.com/api/show/image?fileKey='+response.data.fileKey);
                } else {
                    alert(response.msg);
                }
            };
            xhr.error = function (data) {
                alert('上传失败');
            };
            xhr.send(fileForm);
        },
        uploadImgHooks: {

        }
    }
}
export default config
