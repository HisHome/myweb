// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueResource from 'vue-resource';
import '@/public/less/index.less';
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
import 'swiper/dist/css/swiper.css';
import VueVideoPlayer from 'vue-video-player';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Vuex from 'vuex';
import store from './vuex/store';

Vue.use(VueVideoPlayer);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(VueResource);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
