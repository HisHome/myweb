import * as types from '../mutation-types';
import VueRouter from '@/router/index.js';
import * as IFan from '@/libs/resource/apis/iFan';

import {Message} from 'iview';

const state = {
  musicList: {}
};

// getters
const getters = {
  musicList: state => state.musicList
};

// actions
const actions = {
  // 获取切题结果
  async getMusicList ({ commit }, payload) {
    let data = await IFan.getMusicList(payload);
    console.log(data)
    commit(types.MUSICLIST, data);
  }
};

// mutations
const mutations = {
  [types.MUSICLIST] (state, payload) { // 获取切题结果
    state.musicList = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
