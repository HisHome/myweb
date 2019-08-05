<template>
    <div>
        <div class="img_content">
            <div id="capture" style="padding: 10px;">
                <h3 style="color: #000; padding: 20px; border: 1px solid #666">h3 标签</h3>
                <h3 style="color: #000; ">一 张 图 片</h3>
                <img src="http://img.willclass.com/api/show/image?fileKey=d4ba812aed776a0b68f0734383a23f5f5">
                <img src="/apis/images/banner/movie.jpg" alt="">
            </div>
            <div style="margin:20px 0 20px;">
                <Button type="primary" style="width: 100%;" @click="screenShot('')">截 图 base64</Button>
                <Button type="primary" style="width: 100%;" @click="screenShot('png')">截 图 png</Button>
                <Button type="primary" style="width: 100%;" @click="screenShot('jpeg')">截 图 jpeg</Button>
                <Button type="primary" style="width: 100%;" @click="screenShot('bmp')">截 图 bmp</Button>
            </div>
            <Row id="canvas">
                <Col span="6" class="title_box" v-for="(item, index) in imgList" :key="index">
                    <img :src="item" alt="">
                </Col>
            </Row>
            <div id="canvas">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList: []
            };
        },
        props: {},
        mounted() {},
        computed: {},
        methods: {
            screenShot(type) {
                var opts = {
                    useCORS: true // 【重要】开启跨域配置
                };
                html2canvas(document.querySelector("#capture"), opts).then(canvas => {
                    // console.log(canvas);
                    // document.querySelector("#canvas").appendChild(canvas)
                    var url = canvas.toDataURL(); //图片地址
                    // console.log(url);
                    // let img = document.createElement("img");
                    // img.src = url
                    // img.style.width = '100%'
                    // document.querySelector("#canvas").appendChild(img)
                    if (type){
                        let label = Canvas2Image.convertToImage(canvas, 200, 200, type)
                        console.log(label)
                        document.querySelector("#canvas").appendChild(label)
                    } else {
                        this.imgList = this.imgList.push(url)
                    }
                });
            },
        },
        components: {}
    };
</script>

<style lang="less" scoped>
    .img_content{
        text-align: center;
        padding: 20px 15%;
        #capture{
            background: #ececec;
            border: 1px solid #ccc;
            img{
                width: 100%;
            }
        }
        #canvas{

        }
    }
</style>

