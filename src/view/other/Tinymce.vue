<template>
  <div id="picture">
    <h1 class="center" @click="getData" >WangEditor</h1>
    <div>
        <WangEditor v-model="editorContent" />
    </div>
    <div style="border: 1px solid #ccc;padding: 10px;margin-top: 10px;font-size: 16px;" v-html="editorContent"> </div>
  </div>
</template>
<script>
import WangEditor from "@/components/editor/WangEditor";

export default {
  data() {
    return {
      editorContent: ''
    };
  },
  props: {},
  mounted() {
      console.log(3333333)
  },
  computed: {},
  methods: {
      getData(){
          console.log('=====================')
          console.log(this.editorContent)
      }
  },
  components:{
      WangEditor,
  }
};
</script>
<style lang="less" scoped>
#picture {
  padding: 60px;
  min-height: 800px;
}
</style>

