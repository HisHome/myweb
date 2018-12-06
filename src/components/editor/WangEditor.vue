<template>
    <div ref="editor" style="font-size: 16px;"></div>
</template>
<script>
    import E from 'wangeditor';
    import util from "@/tool/util.js";

    export default {
        data(){
            return{
                editor: null,
            }
        },
        mounted(){
            this.editor = new E(this.$refs.editor)
            this.editor.customConfig = util.wangEditorCustomConfig
            this.editor.customConfig.onchange = (html) => {
                this.$emit('input', html)
            }
            this.editor.create()
            // editor.txt.html('<p>用 JS 设置的内容</p>')
            // editor.txt.clear()清空编辑器内容
            if (this.value) {
                this.editor.txt.html( this.value )
            } else{
                this.editor.txt.html( '' )
            }
        },
        watch: {
            bool: function (val, oldVal) {
                if (val !== oldVal) {
                    this.editor.txt.html(this.value);
                }
            }
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            bool: Boolean
        },
        methods: {
            getData(){

            }
        },
        destroyed () {

        },
    }
</script>
<style scoped lang="less"  rel="stylesheet/less">

</style>
