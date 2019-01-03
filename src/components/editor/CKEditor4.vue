<template>
    <div>
      <textarea class="editor" name="editor"></textarea>
    </div>
</template>
<script>
export default {
  data() {
    return {
      editorContent: '',
      editor: null,
    };
  },
  props: {},
  mounted() {
      this.initCKEditor()
  },
  computed: {},
  methods: {
    initCKEditor() {
        this.editor = CKEDITOR.replace( 'editor' );
        this.editor.on('instanceReady', () => {
            this.editor.setData(this.value);
        });
        this.editor.on('change', ()=>{
            let content = this.editor.getData()
            if (content !== this.value) {
                this.$emit('input', content);
            }
        });
    }
  },
  components: {
  },
    props: {
    value: {
        type: String,
        default: ''
    },
    },
};
</script>
<style lang="less" scoped>
</style>

