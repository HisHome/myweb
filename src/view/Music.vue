<template>
  <div class="music_box">
    <div class="music_content center">
      <h3 class="center music_title">
        <Icon type="music-note"></Icon> 音乐播放列表
      </h3>
      <div style="display:inline-block;width:80%;border:1px solid #ececec;padding:20px;">
          <Row v-for="(item,index) in arr" :key="index">
              <Col span="11">
                   <VueAplayer :music="musicData"></VueAplayer>
              </Col>
              <Col span="11"  offset="2">
                  <VueAplayer :music="musicData"></VueAplayer>
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
      arr: ['','','',''],
      musicData: {
        title: 'Preparation',
        author: '彭洋',
        url: 'http://devtest.qiniudn.com/Preparation.mp3',
        pic: 'http://devtest.qiniudn.com/Preparation.jpg',
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
      }
    }
  },
  components: {
    VueAplayer
  }
}
</script>
<style scoped lang="less">
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
