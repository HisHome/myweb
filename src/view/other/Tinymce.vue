<template>
  <div id="picture">

    <div>
        <Row>
            <Col span="12" style="padding: 10px;">
                <h1 class="center" style="padding: 10px;" @click="getData">tinymce-Editor</h1>
                <Editor
                    v-model="editorContent1"
                    initial-value="这是一段默认文字1"
                    :toolbar="[
                            'newdocument | insertfile undo redo | fullscreen | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | link image | print preview media fullpage | forecolor backcolor emoticons',
                            'styleselect, formatselect, fontselect, fontsizeselect, cut, copy, paste, blockquote, removeformat, subscript, superscript',
                        ]"
                    :init="{
                            plugins: [
                                'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
                                'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                                'save table contextmenu directionality emoticons template paste textcolor imagetools'
                            ],
                            height: 200,
                            language_url: require('@/tool/zh_CN.js'),
                            menubar: false,
                            theme: 'modern',
                            inline: false,
                            image_caption: true,
                            image_list: [
                                {title: 'My image 1', value: 'http://img.huitong.com/api/show/image?fileKey=026776538d925a985f285caddd862e8f5'},
                                {title: 'My image 2', value: 'http://img.huitong.com/api/show/image?fileKey=8f423c4fc18bb9c4b2e7fe7fca3954955'}
                            ],
                            image_advtab: true,
                            image_class_list: [
                                {title: 'None', value: ''},
                                {title: 'Dog', value: 'dog'},
                                {title: 'Cat', value: 'cat'}
                            ],
                            image_title: true,
                            table_default_styles: {
                                width: '50%'
                            },
                            table_class_list: [
                                {title: 'None', value: 'none'},
                                {title: 'Dog', value: 'dog'},
                                {title: 'Cat', value: 'cat'}
                            ],
                            automatic_uploads: true,
                            images_upload_handler: this.images_upload_handler,
                            browser_spellcheck: true,
                            contextmenu: false,
                            formats: {
                                alignleft: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'left'},
                                aligncenter: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'center'},
                                alignright: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'right'},
                                alignjustify: {selector : 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes : 'full'},
                                bold: {inline : 'span', 'classes' : 'bold'},
                                italic: {inline : 'span', 'classes' : 'italic'},
                                underline: {inline : 'span', 'classes' : 'underline', exact : true},
                                strikethrough: {inline : 'del'},
                                forecolor: {inline : 'span', classes : 'forecolor', styles : {color : '%value'}},
                                hilitecolor: {inline : 'span', classes : 'hilitecolor', styles : {backgroundColor : '%value'}},
                            },
                            schema: 'html5',
                        }"
                />
            </Col>
            <Col span="12" style="padding: 10px;">
                <h1 class="center" style="padding: 10px;" @click="getData">tinymce-Editor-inline</h1>
                <Editor
                    v-model="editorContent2"
                    initial-value="这是一段默认文字2"
                    :toolbar="[
                            'newdocument | insertfile undo redo | fullscreen | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | link image | print preview media fullpage | forecolor backcolor emoticons',
                            'styleselect, formatselect, fontselect, fontsizeselect, cut, copy, paste, blockquote, removeformat, subscript, superscript',
                        ]"
                    :init="{
                            plugins: [
                                'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
                                'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                                'save table contextmenu directionality emoticons template paste textcolor'
                            ],
                            language_url: require('@/tool/zh_CN.js'),
                            menubar: false,
                            theme: 'modern',
                            inline: true,
                            height: 200,
                        }"
                />
            </Col>
        </Row>

    </div>

    <Row>
        <Col span="12" style="padding: 10px;">
            <div
                style="border: 1px solid #ccc;padding: 10px;margin-top: 10px;font-size: 16px;"
                v-html="editorContent1"
            ></div>
        </Col>
        <Col span="12" style="padding: 10px;">
            <div
                style="border: 1px solid #ccc;padding: 10px;margin-top: 10px;font-size: 16px;"
                v-html="editorContent2"
            ></div>
        </Col>
    </Row>
  </div>
</template>
<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  data() {
    return {
      editorContent1: "",
      editorContent2: "",
    };
  },
  props: {},
  mounted() {
    console.log(3333333);
  },
  computed: {},
  methods: {
    getData() {
      console.log("=====================");
      console.log(this.editorContent);
    },
    images_upload_handler(blobInfo, success, failure){
        /* 创建Ajax并提交 */
        console.log(blobInfo)
        let xhr = new XMLHttpRequest();
        let fileForm = new FormData();
        fileForm.append('fileUsageType', 26);
        fileForm.append('file', blobInfo.blob(), blobInfo.filename());
        xhr.open('POST', 'http://img.huitong.com/api/upload/file');
        xhr.onload = function (data) {
            let response = JSON.parse(data.currentTarget.response);
            if (response.status === 0) {
                console.log(response.data.fileKey)
                success('http://img.huitong.com/api/show/image?fileKey='+response.data.fileKey);
            } else {
                alert(response.msg);
            }
        };
        xhr.error = function (data) {
            failure('上传失败');
        };
        xhr.send(fileForm);
    }
  },
  components: {
    Editor: Editor
  }
};
</script>
<style lang="less" scoped>
#picture {
  padding: 20px;
  min-height: 800px;
}
</style>

