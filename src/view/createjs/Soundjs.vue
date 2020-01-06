<template>
  <div id="content">
    <h1 class="center">{{content}}</h1>
    <div id="myID"></div>
    <div>
        <Progress :percent="parseInt( myInstance && myInstance.duration ? (currentTime/myInstance.duration)*100 : 0)" hide-info />
        <Button @click="handleLoad">开始</Button>
        <Button @click="audioPaused">暂停</Button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        content: 'soundjs-音频播放试验',
        myInstance: null,
        currentTime: 0,
        setInterval: null
    }
  },
  props: {
  },
  mounted() {
        createjs.Sound.registerSound("/apis/audio/audio.mp3", "myID", 3);
        createjs.Sound.alternateExtensions = ["mp3"];
        // createjs.Sound.on("fileload", this.handleLoad);
  },
  computed: {

  },
  methods: {
        handleLoad(){
            this.myInstance = createjs.Sound.play("myID", {loop: 0});
            this.myInstance.volume = 1;
            this.myInstance.on("complete", this.handleComplete);
            this.myInstance.on("loop", this.handleLoop);
            this.myInstance.on("failed", this.handleFailed);
            this.myInstance.on("interrupted", this.interrupted);
            this.myInstance.on("succeeded", this.succeeded);
            this.currentTime =  this.myInstance.getPosition()
            this.setInterval = setInterval(()=>{
                this.currentTime =  this.myInstance.getPosition()
            },30)
        },
        audioPaused() {
            this.myInstance.paused = true;
            console.log(this.myInstance)
            console.log(this.myInstance.startTime)
            console.log(this.myInstance.position)
            console.log(this.myInstance.duration)
        },
        handleComplete(){
            console.log('handleComplete')
            clearInterval(this.setInterval)
        },
        handleLoop(){
            console.log('handleLoop')
        },
        handleFailed(){
            console.log('handleFailed')
        },
        interrupted(){
            console.log('interrupted')
        },
        succeeded(){
            console.log('succeeded')
        }
    }
}
</script>
<style lang="less" scoped>
#content{
  padding: 60px;
  min-height: 800px;
}
</style>

