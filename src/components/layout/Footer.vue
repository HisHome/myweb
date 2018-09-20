<template>
    <div class="footer_box">
        <h3>
        <img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/icons_5859e57.png" alt="">
        <a href="http://www.miitbeian.gov.cn">京ICP备18036599号-1</a>
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
        position:fixed;
        left:0;
        bottom:20px;
        width:100%;
    }
    .footer_box h3{
        display:inline-block;
        padding:4px 20px;
        background:#777;
        opacity:.7;
        text-align:center;
        color:#fcfcfc;
        border-radius:20px;
        font-weight:500;
    }
</style>