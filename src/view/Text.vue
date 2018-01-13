<template>
    <div class="content">
        <div style="height:230px;background: #b7bbbf;">
            <swiper :options="swiperOption" style="height:100%;">
                <swiperSlide style="background:#4bb5ff;">I'm Slide 111</swiperSlide>
                <swiperSlide style="background:#f00;">I'm Slide 222</swiperSlide>
                <swiperSlide style="background:orange;">I'm Slide 333</swiperSlide>
                <swiperSlide style="background:pink;">I'm Slide 444</swiperSlide>
                <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
            </swiper>
        </div>
        <div class="list_content" style="position:relative;z-index:4;">
            <Card class="nav_blank" :bordered="false">
                <Row>
                    <Col span="10">
                    <p>按方向</p>
                    <Button style="margin-bottom:10px;margin-right:10px;" type="ghost" v-for="item in 12" :key="item">分类{{item}}</Button>
                    </Col>
                    <Col span="14">
                    <p>热门分类</p>
                    <Button style="margin-bottom:10px;margin-right:10px;" type="ghost" v-for="item in 12" :key="item">热门分类{{item}}</Button>
                    </Col>
                </Row>
            </Card>
            <div>
                <Row>
                    <Col class="text_box" span="6" v-for="item in 12" :key="item">
                    <div class="text_box_info">
                        <div class="img_box">
                            <img width="100%" src="../public/img/text_info.jpg" alt="">
                        </div>
                        <div class="info_box">
                            <h3>这是一段标题</h3>
                            <p>这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述</p>
                            <div class="border_title">
                                <p>中级！123人学习</p>
                                <Rate show-text allow-half value="2.5" @on-change="changeStar">
                                    <span style="color: #f5a623">2.5</span>
                                </Rate>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
            <div style="text-align:center;padding-top:25px;">
                <Page :total="100"></Page>
            </div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    data () {
        return {
            msg: 'hello world',
            swiperOption: {
                setWrapperSize: true,
                // pagination: '.swiper-pagination',
                paginationClickable: true,
                mousewheelControl: false,
                observeParents: true,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                loop: true
                // scrollbar:'.swiper-scrollbar',
            },
            swiperSlides: [1, 2, 3, 4, 5]
        };
    },
    methods: {
        changeStar (val) {
            console.log(val);
        }
    },
    components: {
        swiper,
        swiperSlide
    }
};
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
    margin-top: -80px;
    box-shadow: 0 2px 10px 2px rgba(7, 17, 27, 0.1);
    padding: 15px;
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
        h3 {
            font-weight: 400;
            font-size: 16px;
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
</style>

