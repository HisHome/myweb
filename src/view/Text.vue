<template>
    <div class="content">
        <MyHeader />
        <div style="height:270px;background: #b7bbbf;">
            <swiper :options="swiperOption" style="height:100%;">
                <swiperSlide style="" v-for="(item, index) in banner" :key="index" :class="{[`banner${index + 1}`]: true}"></swiperSlide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
            </swiper>
        </div>
        <div class="list_content" style="position:relative;z-index:4;">
            <Card class="nav_blank" :bordered="false">
                <Row>
                    <Col span="6" class="title_box" v-for="(item, index) in textTypeList" :key="index">
                        <div :class="{'text-type': true, [`text-${item.color}`]: true}" @click="changeCatid(item.value)">
                            <div style="display:inline-block;">
                                <h2 class="type_title">{{item.name}}</h2>
                                <i-circle v-if="catid==item.value" :percent="100" stroke-color="#fff" :size="46" style="float: left;">
                                    <Icon type="ios-checkmark-empty" size="60" style="color:#fff"></Icon>
                                </i-circle>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
            <div>
                <Row>
                    <Col class="text_box" span="6" v-for="(item, index) in novelListData.data" :key="index">
                        <div class="text_box_info">
                            <div class="img_box">
                                <!-- <img width="100%" src="../public/img/text_info.jpg" alt=""> -->
                                <img width="100%" :src="item.coverUrl | httpImgUrl" alt="">
                            </div>
                            <div class="info_box">
                                <h3 class="book-title">名称：{{item.title}}</h3>
                                <p class="book-desc">简介：{{item.description}}</p>
                                <div class="border_title">
                                    <p>{{item.priceInfo}} &nbsp;&nbsp;共{{item.pageNum || '--'}}页</p>
                                    作者：<span v-for="(write, sindex) in item.writers" :key="sindex">
                                        {{write.name}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div class="loading" v-if="!novelListData.data">
                    <Icon class="ani_font" type="load-a" size="28" color="#2d8cf0"></Icon>
                </div>
            </div>
            <div style="text-align:center;padding-top:25px;">
                <Button :disabled="currentNum === 1 ? true : false" @click="changePage('prev')">&lt; 上一页</Button> &nbsp;&nbsp;&nbsp;
                <Button :disabled="novelListData.hasNext ? false : true" @click="changePage('next')">下一页 &gt;</Button>
            </div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MyHeader from '@/components/layout/Header.vue';
import MyFooter from '@/components/layout/Footer'
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            msg: 'hello world',
            swiperOption: {
                setWrapperSize: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                mousewheelControl: false,
                observeParents: true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                loop: true,
                // scrollbar:'.swiper-scrollbar',
            },
            swiperSlides: [1, 2, 3, 4, 5],
            novelListData: {},
            currentNum: 1,
            catid: 'novel',
            textTypeList: [
                {name: '小说', value: 'novel', color:'info' },
                {name: '漫画', value: 'comic', color:'success' },
                {name: '画集', value: 'illustration', color:'warning' },
                {name: '其他', value: 'misc', color:'error' },
            ],
            banner:[
                {url:require('../public/img/text/text1.jpg')},
                {url:require('../public/img/text/text2.jpg')},
                {url:require('../public/img/text/text3.jpg')},
                {url:require('../public/img/text/text4.png')},
            ]
        }
    },
    created(){
        this.getData();
    },
    watch:{
        novelList(val,oldVal){
            this.novelListData = val;
        }
    },
    computed: {
        ...mapGetters({
            novelList: 'novelList',
        }),
    },
    methods: {
        changePage(type){
            console.log(type)
            if (type == 'next'){
                this.currentNum = this.currentNum + 1;
            } else if (type == 'prev'){
                this.currentNum = this.currentNum - 1;
            }
            this.getData();
        },
        getData(){
            this.novelListData = {}
            this.$store.dispatch('getBook',{catid: this.catid, pageToken: this.currentNum});
        },
        changeCatid(val) {
           this.catid = val;
           this.currentNum = 1;
           this.getData();
        }
    },
    components: {
        swiper,
        swiperSlide,
        MyHeader,
        MyFooter
    }
}
</script>
<style lang="less" scoped>
.swiper-button-prev{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
}
/*改变了颜色和加粗的样式*/
.swiper-button-next{
    // background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");

}
.banner1{
    background: url('../public/img/text/text1.jpg') center bottom;
    background-size: 100% auto;
}
.banner2{
    background: url('../public/img/text/text2.jpg') center center;
    background-size: 100% auto;
}
.banner3{
    background: url('../public/img/text/text3.jpg') center center;
    background-size: 100% auto;
}
.banner4{
    background: url('../public/img/text/text4.png') center center;
    background-size: 100% auto;
}

.content {
    background: #f3f5f7;
}

.list_content {
    padding: 15px;
    width: 1200px;
    margin: 0 auto;
}

.nav_blank {
    border-radius: 8px;
    margin-top: 0px;
    box-shadow: 0 2px 10px 2px rgba(7, 17, 27, 0.1);
}

.text_box {
    position: relative;
    padding: 15px;
    height: 316px;
    .text_box_info {
        border-radius: 8px;
        box-shadow: 0px 4px 8px 0px rgba(7, 17, 27, 0.1);
        transition: .3s all linear;
        background: #fff;
        height: 100%;
        overflow: hidden;
    }
    .img_box {
        height: 100px;
        overflow: hidden;
    }
    .info_box {
        height: 186px;
        box-sizing: border-box;
        padding: 15px;
        position: relative;
        .book-title {
            font-weight: 400;
            font-size: 16px;
            height: 42px;
            overflow: hidden;
        }
        .book-desc{
            color: #999;
            padding-top:10px; 
        }
        .border_title {
            background: #fff;
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 15px;
            width: 100%;
        }
    }
}
.title_box{
    padding:10px;
    text-align: center;
}
.text-type{
    padding:15px;
    height: 80px;
    line-height: 50px;
    border-radius: 6px;
    color: #fff;
    overflow: hidden;
    .type_title{
        float: left;
        padding: 0 10px;
    }
}
.text-info{
    background: #2d8cf0;
}
.text-success{
    background: #19be6b;
}
.text-warning{
    background: #ff9900;
}
.text-error{
    background: #ed3f14;
}
.loading{
    background: #fff;padding: 100px;text-align: center;
}
.ani_font{
	  	animation:mymove 1.2s linear infinite;
		-webkit-animation:mymove 1.2s linear infinite; /*Safari and Chrome*/
  }
  	@keyframes mymove
	{
		from {
			transform:rotate(0deg);
			-webkit-transform:rotate(0deg); /* Safari 和 Chrome */
		}
		to {
			transform:rotate(360deg);
			-webkit-transform:rotate(360deg); /* Safari 和 Chrome */
		}
	}

	@-webkit-keyframes mymove /*Safari and Chrome*/
	{
		from {
			transform:rotate(0deg);
			-webkit-transform:rotate(0deg); /* Safari 和 Chrome */
		}
		to {
			transform:rotate(360deg);
			-webkit-transform:rotate(360deg); /* Safari 和 Chrome */
		}
	}
</style>

