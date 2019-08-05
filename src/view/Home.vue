<template>
    <div id="home" :style="{height: height +'px'}" >
        <div class="home_box">
            <div class="home_content">
                <Carousel v-model="value1" loop :height="carouselHeight" >
                    <CarouselItem v-for="(item,index) in bannerList" :key="index">
                        <router-link :to="{name: item.routerName}">
                            <div class="demo-carousel" :style="{background: `url(${item.imgUrl}) no-repeat left center`, backgroundSize: '100% 100%'}" >{{item.name}}
                            </div>
                        </router-link>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
        <MyFooter />
    </div>
</template>
<script>
    import banner from '@/libs/banner.js';
    import MyFooter from "@/components/layout/Footer";
    export default {
        data(){
            return{
                title:'彭洋的网站-终于上线了',
                dec:'人生中的一道道门槛，迈过了就是门，迈不过就是坎',
                msg:'这是首页',
                height: '500px',
                value1: 0,
                bannerList: banner,
            }
        },
        created(){
            const resize =()=>{
                this.height = document.body.clientHeight - 120;
                this.carouselHeight = this.height * 0.7
            }
            window.onresize = resize;
            resize();
        },
        methods: {
            getData(){

            }
        },
        components:{
            MyFooter
        }
    }
</script>
<style scoped lang="less"  rel="stylesheet/less">
    .home_box{
        min-height:400px;
        padding:8% 12% 0;
        height:100%;
        box-sizing:border-box;
        background: -webkit-linear-gradient(#efdfd9, #fff); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#efdfd9, #fff); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#efdfd9, #fff); /* Firefox 3.6 - 15 */
        background: linear-gradient(#efdfd9, #fff); /* 标准的语法 */
    }
    .home_content{
        border: 1px solid #ececec;
        box-shadow: 0px 0px 20px 0px #efdfd9;
        border-radius: 8px;
        background: #fff;
    }
    .demo-carousel{
        height: 100%;
    }
</style>
