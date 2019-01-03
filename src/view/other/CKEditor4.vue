<template>
  <div id="ckeditor">
    <div>
      <CKEditor v-model="editorContent" />
    </div>
    <Row>
      <Col span="24" style="padding: 10px;">
        <div
          style="border: 1px solid #ccc;padding: 10px;margin-top: 10px;font-size: 16px;"
          v-html="editorContent"
        ></div>
      </Col>
    </Row>
  </div>
</template>
<script>
import CKEditor from "@/components/editor/CKEditor4";
export default {
  data() {
    return {
      editorContent: '初始内容',
    };
  },
  props: {},
  mounted() {
  },
  computed: {},
  methods: {
    getData() {
      console.log("=====================");
      console.log(this.editorContent);
    },
  },
  components: {
      CKEditor: CKEditor
  }
};
</script>
<style lang="less" scoped>
#ckeditor {
  padding: 20px;
  min-height: 800px;
}
</style>

