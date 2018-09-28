<template>
  <div class="music_comp">
      <!-- <MyHeader /> -->
          <div class="music_content center">
            <div class="banner" style="height:260px;">

            </div>
            <div class="left" style="display:inline-block;width:90%;padding:20px;">
                  <div class="music_sort">
                      <Input class="center" v-model="searchInput" clearable placeholder="输入关键词搜索..." style="width: 300px;"  icon="ios-search-strong" @on-enter="searcKeyword" @on-click="searcKeyword" ></Input>&nbsp;&nbsp;&nbsp;&nbsp;
                      热门搜索：<a href="javascript:;" v-for="(item,index) in hotList" :key="index" @click="hotSearch(item)">{{item}} &nbsp;&nbsp;</a>
                  </div>
                  <Row>
                    <Col span="6" v-for="(item,index) in musicListData.data" :key="index" style="padding:5px;">
                      <div class="audio_box">
                        <!-- <VueAplayer :music="musicData"></VueAplayer> -->
                        <dl class="music_box">
                            <dt class="music_font">
                                <div class="hidden img_box" >
                                    <img :src="item.coverUrl | httpImgUrl" width="100" alt="">
                                </div>
                            </dt>
                            <dd class="music_text hidden">
                                <h3 class="music_name">{{item.title}}</h3>
                                <p class="music_dec">简介：{{item.description}}</p>
                                <p class="music_singer">演唱者：<span v-for="(sitem,sindex) in item.singers" :key="sindex">{{sitem.name}}</span></p>
                            </dd>
                        </dl>
                      </div>
                    </Col>
                  </Row>
                  <div class="loading" v-if="!musicListData.data">
                      <Icon class="ani_font" type="load-a" size="28" color="#2d8cf0"></Icon>
                  </div>
                  <div v-if="musicListData.data" style="text-align:center;padding-top:25px;">
                      <Button :disabled="currentNum === 1 ? true : false" @click="changePage('prev')">&lt; 上一页</Button> &nbsp;&nbsp;&nbsp;
                      <Button :disabled="musicListData.hasNext ? false : true" @click="changePage('next')">下一页 &gt;</Button>
                  </div>
            </div>
      </div>
  </div>
</template>
<script>
import MyHeader from "@/components/layout/Header.vue";
import MyFooter from "@/components/layout/Footer";
import VueAplayer from "vue-aplayer";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      msg: "hello music",
      arr: ["", "", "", ""],
      tabNum: 0,
      musicData: {
        title: "Preparation",
        author: "彭洋",
        url: "http://devtest.qiniudn.com/Preparation.mp3",
        pic: "http://devtest.qiniudn.com/Preparation.jpg",
        lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
      },
      currentNum: 1,
      musicListData: {},
      searchInput: null,
      hotList: ['#4','Gothika','ANIMEX','Activity']
    };
  },
  created(){
    this.getData()
  },
  watch: {
    musicList(val, oldVal) {
      this.musicListData = val;
    }
  },
  computed: {
    ...mapGetters({
      musicList: "musicList"
    })
  },
  methods: {
    hotSearch(val){
      this.searchInput = val;
      this.searcKeyword();
    },
    searcKeyword(){
      if (!this.searchInput){
        message.error('搜索内容为空!');
        return;
      }
      this.currentNum = 1;
      this.getData()
    },
    changePage(type) {
      if (type == "next") {
        this.currentNum = this.currentNum + 1;
      } else if (type == "prev") {
        this.currentNum = this.currentNum - 1;
      }
      this.getData();
    },
    getData() {
      this.musicListData = {};
      this.$store.dispatch("getMusicList", {
        pageToken: this.currentNum,
        kw: this.searchInput,
      });
    },
  },
  components: {
    VueAplayer,
    MyHeader
  }
};
</script>
<style scoped lang="less">
.banner{
  background: url('../public/img/music/music2.jpg') center center;
  background-size: 100% auto;
}
.music_sort {
  border: 1px solid #ececec;
  box-shadow: 0px 4px 8px 0px rgba(7, 17, 27, 0.1);
  padding: 15px;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 10px;
}

.music_title {
  color: #4bb5ff;
  font-size: 20px;
  .icon {
    color: #f00;
  }
}
.music_box{
    box-shadow: 0px 4px 8px 0px rgba(7, 17, 27, 0.1);
    position: relative;
    padding-left: 140px;
  .music_font{
    position: absolute;
    left: 10px;
    top:10px;
    padding: 10px;
    border: 1px solid #ececec;
    .img_box{
      height: 100px;
      width: 100px;
      img{
        height:100%;
      }
    }
  }
  .music_text{
    height: 140px;
    padding-top: 20px;
    padding-right: 10px;
    .music_name{
      height: 30px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space:nowrap
    }
    .music_dec{
      height: 52px;
      overflow: hidden;
    }
    .music_singer{
      height: 20px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space:nowrap
    }
  }
}
</style>
<style lang="less">
// .audio_box {
//   height: 126px;
//   .aplayer {
//     box-shadow: 0px 4px 8px 0px rgba(7, 17, 27, 0.1);
//     .aplayer-pic {
//       float: none;
//       width: 100%;
//       height: 60px;
//     }
//     .aplayer-info {
//       margin-left: 0;
//       height: 60px;
//       .aplayer-music {
//         text-align: left;
//         margin: 0;
//         padding: 0 0 5px;
//       }
//     }
//   }
// }
</style>


