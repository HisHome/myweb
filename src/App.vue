<template>
  <div id="app">
    <MyHeader />
      <router-view></router-view>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "@/components/layout/Header.vue";
import MyFooter from "@/components/layout/Footer";
export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
  #app{
    height:100%;
  }
</style>
