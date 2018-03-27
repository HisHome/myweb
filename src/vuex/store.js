// vuex配置

import Vue from 'vue';
import Vuex from 'vuex';

// const debug = process.env.NODE_ENV !== 'production';

import * as types from './mutation-types';
// import VueRouter from '../router/index.js';
import * as RecordServer from '@/libs/resource/record';

import { Message } from 'iview';
Vue.use(Vuex);

const state = {
    cutExerciseInfo: {}
};
// getters
const getters = {
    cutExerciseInfo: state => state.cutExerciseInfo
};

// actions
const actions = {
  // 获取切题结果
    async fetchExerciseByTaskid ({ commit }, payload) {
        let data = await RecordServer.single(payload);
        commit(types.CUT_EXERCISE_INFO, data);
        Message.info('请求成功');
    }
};

// mutations
const mutations = {
    [types.CUT_EXERCISE_INFO] (state, payload) { // 获取切题结果
        state.cutExerciseInfo = payload;
    }
};

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: {

    }
  // strict: false
  // strict: debug
});
