<template>
  <div id="content">
    <h1 class="center">{{content}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
        content: '21212'
    }
  },
  props: {
  },
  mounted() {

  },
  computed: {

  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
#content{
  padding: 60px;
  min-height: 800px;
}
</style>

