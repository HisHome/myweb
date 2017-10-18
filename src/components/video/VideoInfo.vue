<template>
  <div>
    <div>
      <div class="md-subhead">
        <h3 class="center video_title">
          <Icon type="ios-videocam"></Icon> 视频列表
        </h3>
      </div>
    </div>
    <div>
      <div class="item">
        <div class="player">
          <video-player  class="vjs-custom-skin"
                         ref="videoPlayer"
                         :options="playerOptions"
                         :playsinline="true"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
                         @ended="onPlayerEnded($event)"
                         @loadeddata="onPlayerLoadeddata($event)"
                         @waiting="onPlayerWaiting($event)"
                         @playing="onPlayerPlaying($event)"
                         @timeupdate="onPlayerTimeupdate($event)"
                         @canplay="onPlayerCanplay($event)"
                         @canplaythrough="onPlayerCanplaythrough($event)"
                         @ready="playerReadied"
                         @statechanged="playerStateChanged($event)">
          </video-player>
        </div>
      </div>
      <div>
        <Row>
            <Col span="6">
                <img src="../../public/img/full_image.jpg" alt="图片" style="width:100%;">
            </Col>
            <Col span="18">
              
              <p>视频简介</p>
              <p>时长：2223</p>
              <p>内容：阿发是方式发送大</p>
            </Col>
        </Row>
      </div>
      <div>
        <Row>
            <Col span="6" v-for="item in 4">
              <h3>推荐视频</h3>
              <div>
                <p>
                  奥发哦是否好石佛暗示法奥是否按时佛奥石佛asofo啊是
                </p>
              </div>
            </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
          playerOptions:{
              muted: true,
              language: 'en',
              playbackRates: [0.7, 1.0, 1.5, 2.0],
              sources: [{
                type: "video/mp4",
                src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
              }],
              poster: "/public/img/full_image.jpg",
          },
      }
    },
    props: {
      fff: Object
    },
    mounted() {
      // console.log('this is current player instance object', this.player)
      setTimeout(() => {
        // console.log('dynamic change options', this.player)
        this.player.muted(false)
      }, 2000)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        // seek to 10s
        player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
    }
  }
</script>
<style lang="less" scoped>
  .video_title{
    height: 60px;
    line-height: 60px;
    font-size: 20px;
  }
  .other_video{
    height: 200px;
  }
</style>

