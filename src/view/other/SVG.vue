<template>
    <div id="content">
         <Row>
            <Col span="4">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1">
                    <circle cx="50" cy="50" r="40" stroke="#4bb5ff" stroke-width="8" fill="orange" />
                </svg>
            </Col>
            <Col span="4">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">
                    <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
                    style="fill:red;stroke:black;stroke-width:5;opacity:0.5;stroke-width:5;fill-opacity:0.1"/>
                </svg>
            </Col>
            <Col span="4">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">
                    <ellipse cx="100" cy="100" rx="98" ry="60" style="fill:yellow;stroke:purple;stroke-width:2"/>
                    <ellipse cx="100" cy="100" rx="80" ry="50" style="fill:orange;stroke:purple;stroke-width:2"/>
                </svg>
            </Col>
            <Col span="4">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">
                    <polygon points="100,10 40,180 190,60 10,60 160,180"
                    style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
                </svg>
            </Col>
            <Col span="4">col</Col>
            <Col span="4">col</Col>
            <Col span="4">col</Col>
            <Col span="4">col</Col>
            <Col span="4">col</Col>
            <Col span="4">col</Col>
        </Row>
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
      console.log(121212)
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
#content {
  padding: 20px;
  min-height: 800px;
}
</style>

