<template>
  <div id="ckeditor">
    <div>
      <!-- 工具栏容器 -->
      <div id="toolbar-container"></div>
      <!-- 编辑器容器 -->
      <div id="editor">
        <p>This is the initial editor content.</p>
      </div>
    </div>
    <Row>
      <Col span="24" style="padding: 10px;">
        <div
          style="border: 1px solid #ccc;padding: 10px;margin-top: 10px;font-size: 16px;"
          v-html="editorContent1"
        ></div>
      </Col>
    </Row>
  </div>
</template>
<script>
import CKEditor from "@ckeditor/ckeditor5-build-decoupled-document";
 import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'


export default {
  data() {
    return {
      editor: null,
      editorContent1: ''
    };
  },
  props: {},
  mounted() {
    this.initCKEditor();
  },
  computed: {},
  methods: {
    getData() {
      console.log("=====================");
      console.log(this.editorContent);
    },
    initCKEditor() {
        class UploadAdapter {
            constructor(loader) {
                this.loader = loader;
            }
            upload() {
                return new Promise((resolve, reject) => {
                    /* 创建Ajax并提交 */
                    let xhr = new XMLHttpRequest();
                    let fileForm = new FormData();
                    fileForm.append('fileUsageType', 26);
                    fileForm.append('file', this.loader.file);
                    xhr.open('POST', 'http://img.huitong.com/api/upload/file');
                    xhr.onload = function (data) {
                        let response = JSON.parse(data.currentTarget.response);
                        if (response.status === 0) {
                            console.log(response.data.fileKey)
                            resolve({
                                default: 'http://img.huitong.com/api/show/image?fileKey='+response.data.fileKey
                            });
                        } else {
                            reject(response.msg);
                        }
                    };
                    xhr.error = function (data) {
                        alert('上传失败');
                    };
                    xhr.send(fileForm);

                });
            }
            abort() {
            }
        }
      CKEditor.create(document.querySelector("#editor"), {
          language: 'zh-cn',
          autosave: {
            save( editor ) {
                console.log(111)
                return saveData( editor.getData() );
            }
        }
      })
        .then(editor => {
            const toolbarContainer = document.querySelector("#toolbar-container");
            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            this.editor = editor; //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
            this.editor.plugins.get('FileRepository').createUploadAdapter = (loader)=>{
                return new UploadAdapter(loader);
            };
            this.editor.setData('erererer')

        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
#ckeditor {
  padding: 20px;
  min-height: 800px;
}
</style>

