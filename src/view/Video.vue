<template>
  <div>
    <div>
      <div class="video_example">
        视频示例图片
      </div>
      <div class="vidoe_list">
        <div>
          <h3></h3>
          <Row>
            <Col span="6" v-for="( item, index ) in 4" :key="index">
               <div>
                 <img src="http://devtest.qiniudn.com/Preparation.jpg" alt="" width="100%;">
               </div>
               <div>
                 <h3>示例名称 {{item}} </h3>
                 <div>这是一段描述</div>
                 <p>这是一段描述这是一段描述这是一段描述</p>
               </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            playerOptions: {
                poster: '/public/img/full_image.jpg'
            }
        };
    },
    props: {
    },
    mounted () {

    },
    computed: {

    },
    methods: {

    }
};
</script>
<style lang="less" scoped>
.video_title {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}

.other_video {
  height: 200px;
}
</style>

