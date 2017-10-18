<template>
  <div class="music_box">
    <div class="music_content center">
      <div style="height:200px;background:#4bb5ff;">

      </div>
      <div style="display:inline-block;width:90%;padding:20px;">
        <h3 class="center music_sort">
          <Row>
            <Col span="4" v-for="(item,index) in 6" :key="index" style="">
              <div :class="{'sort_title': index===tabNum,'sort_title_default': true}" @click="tab(index)">
                <img src="http://devtest.qiniudn.com/Preparation.jpg" alt="" style="width:50%;">
                <h3>全部</h3>
              </div>
            </Col>
          </Row>
        </h3>
        <Row>
          <Col span="6" v-for="(item,index) in 10" :key="index" style="padding:5px;">
          <div class="audio_box">
            <VueAplayer :music="musicData"></VueAplayer>
          </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
import VueAplayer from 'vue-aplayer'
export default {
  data() {
    return {
      msg: 'hello music',
      arr: ['', '', '', ''],
      tabNum: 0,
      musicData: {
        title: 'Preparation',
        author: '彭洋',
        url: 'http://devtest.qiniudn.com/Preparation.mp3',
        pic: 'http://devtest.qiniudn.com/Preparation.jpg',
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
      }
    }
  },
  methods: {
    tab(index) {
      this.tabNum = index;
    }
  },
  components: {
    VueAplayer
  }
}
</script>
<style scoped lang="less">
.music_sort{
  border: 1px solid #ececec;
   box-shadow: 0px 4px 8px 0px rgba(7, 17, 27, 0.1);
   padding: 20px;
   border-radius: 10px;
   margin-top:-60px;
   background: #fff;
   .sort_title_default{
     cursor: pointer;
     text-align:center;
     border-bottom:2px solid #fff;
     padding:6px 10px;
   }
   .sort_title{
     border-bottom:2px solid #4bb5ff;
   }
}
.music_content {
  padding-top: 20px;
}

.music_title {
  color: #4bb5ff;
  font-size: 20px;
  .icon {
    color: #f00;
  }
}
</style>
<style lang="less">
.audio_box {
  height: 126px;
  .aplayer {
    box-shadow: 0px 4px 8px 0px rgba(7, 17, 27, 0.1);
    .aplayer-pic {
      float: none;
      width: 100%;
      height: 60px;
    }
    .aplayer-info {
      margin-left: 0;
      height: 60px;
      .aplayer-music {
        text-align: left;
        margin: 0;
        padding: 0 0 5px;
      }
    }
  }
}
</style>


