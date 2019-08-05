import * as types from '../mutation-types';
import VueRouter from '@/router/index.js';
import * as mTime from '@/libs/resource/apis/mTime.js';

import { Message } from 'iview';

const state = {
    onSale: [],
    locationMovies: [],
    movieDetail: {}
};

// getters
const getters = {
    onSale: state => state.onSale,
    locationMovies: state => state.locationMovies,
    movieDetail: state => state.movieDetail,
};

// actions
const actions = {
    // 获取切题结果
    async getOnSale({ commit }, payload) {
        let data = await mTime.getHotPlayMovies(payload);
        console.log(data)
        commit(types.ONSALE, data);
    },
    // 获取切题结果
    async getLocationMovies({ commit }, payload) {
        let data = await mTime.getLocationMovies(payload);
        console.log(data)
        commit('mTimeLocationMovies', data);
    },
    // 影片详情
    async getMovieDetail({ commit }, payload) {
        let data = await mTime.getMovieDetail(payload);
        console.log(data)
        commit('mTimeMovieDetail', data);
    }
};

// mutations
const mutations = {
    [types.ONSALE](state, data) {
        state.onSale = data;
    },
    mTimeLocationMovies(state, data) {
        state.locationMovies = data;
    },
    mTimeMovieDetail(state, data) {
        state.movieDetail = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
