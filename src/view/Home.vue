<template>
    <div id="home" :style="{height: height}" >
        <!-- <MyHeader /> -->
        <div class="home_box">
            <div class="null_height"></div>
            <div class="home_content">
                <h2>{{title}}</h2>
                <h3>{{dec}}</h3>
            </div>
            <!-- <div class="btn_box">
                <Button @click="getData" class="btn_nav" type="success" shape="circle" size="large"><Icon type="power"></Icon>&nbsp;目录</Button> &emsp;&emsp;
                <Button style="background:#00ADB5" class="btn_nav" type="success" shape="circle" size="large"><Icon type="ios-paw"></Icon>&nbsp;简介</Button>
            </div> -->
        </div>
        <!-- <MyFooter></MyFooter> -->
    </div>
</template>
<script>
    import MyHeader from '@/components/layout/Header.vue';
    import MyFooter from '@/components/layout/Footer'
    export default {
        data(){
            return{
                title:'彭洋的网站-终于上线了',
                dec:'人生中的一道道门槛，迈过了就是门，迈不过就是坎',
                msg:'这是首页',
                height: '500px',
            }
        },
        created(){
            console.log(document.body.clientHeight);
            const resize =()=>{
                this.height = document.body.clientHeight  - 111 +'px'
            }
            window.onresize = resize;
            resize();
        },
        methods: {
            getData(){
            }
        },
        components:{
            MyHeader,
            MyFooter
        }
    }
</script>
<style scoped lang="less"  rel="stylesheet/less">
    #home{
        background:url('../public/img/full_image.jpg') center -75px;
    }
    .home_box{
        min-height:400px;
        padding-top:10%;
        height:100%;
        box-sizing:border-box;
    }
    .null_height{
        height:10%;
    }
    .home_content{
        min-height:26%;
        // padding-bottom:60px;
    }
    .home_box h2,.home_box h3{
        text-align:center;
        line-height:40px;
    }
    .home_box h2{
        font-size:26px;
        color:#47cb89;
        margin-bottom:12px;
    }
    .btn_box{
        text-align:center;
    }
    .btn_box  .btn_nav{
        width:200px;
        height:50px;
        font-size:20px;
    }
</style>