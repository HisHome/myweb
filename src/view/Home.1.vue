<template>
    <div id="home" :style="{height: height}" >
        <div class="home_box">
            <div class="home_content">
                <Carousel
                    v-model="value3"
                    :autoplay="setting.autoplay"
                    :autoplay-speed="setting.autoplaySpeed"
                    :dots="setting.dots"
                    :radius-dot="setting.radiusDot"
                    :trigger="setting.trigger"
                    :arrow="setting.arrow"
                    >
                    <CarouselItem>
                        <div class="demo-carousel" >1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel" >2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel" >3</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel" >4</div>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    </div>
</template>
<script>
    import MyHeader from '@/components/layout/Header.vue';
    import MyFooter from '@/components/layout/Footer'
    const ExportJsonExcel = require('js-export-excel')
    export default {
        data(){
            return{
                title:'彭洋的网站-终于上线了',
                dec:'人生中的一道道门槛，迈过了就是门，迈不过就是坎',
                msg:'这是首页',
                height: '500px',
                value3: 0,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: true,
                    trigger: 'click',
                    arrow: 'hover',
                    // height: '100%'
                }
            }
        },
        created(){
            const resize =()=>{
                this.height = document.body.clientHeight - 111 +'px'
            }
            window.onresize = resize;
            resize();
        },
        methods: {
            getData(){
                var option={};
                option.fileName = '导出的excel'
                option.datas=[
                    {
                        sheetData:[
                            {one:'一行一列',two:'一行二列'},
                            {one:'二行一列',two:'二行二列'}
                        ],
                        sheetName:'sheet',
                        // sheetFilter:['one','two'],
                        // sheetHeader:['第一列','第二列'],
                        columnWidths: [20, 20]
                    }
                ];

                var toExcel = new ExportJsonExcel(option); //new
                toExcel.saveExcel(); //保存
            }
        },
        components:{
            MyHeader,
            MyFooter
        }
    }
</script>
<style scoped lang="less"  rel="stylesheet/less">
    .home_box{
        min-height:400px;
        padding:9% 12% 0;
        height:100%;
        box-sizing:border-box;
        background: -webkit-linear-gradient(#efdfd9, #fff); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#efdfd9, #fff); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#efdfd9, #fff); /* Firefox 3.6 - 15 */
        background: linear-gradient(#efdfd9, #fff); /* 标准的语法 */
    }
    .home_content{
        height: 82%;
        border: 1px solid #ececec;
        box-shadow: 0px 0px 20px 0px #efdfd9;
        border-radius: 8px;
        background: #fff;
    }
    .demo-carousel{
        height:200px;
    }
</style>
