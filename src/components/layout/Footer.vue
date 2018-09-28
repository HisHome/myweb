<template>
    <div class="footer_box">
        <h3 class="beian">
            <img src="../../public/img/beian.png" alt="">
            <a href="http://www.miitbeian.gov.cn" class="beian-num" >京ICP备18036599号-1</a>
        </h3>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'Copyright © 2016 Your Company - More Templates  - Collect from '
            }
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .footer_box{
        text-align:center;
        width:100%;
        height: 50px;
        background: #000;
    }
    .beian{
        padding-top: 15px;
        .beian-num{
            color:  #fff;
        }
    }
</style>