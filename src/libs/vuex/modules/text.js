import * as types from '../mutation-types';
import VueRouter from '@/router/index.js';
import * as IFan from '@/libs/resource/apis/iFan';

import {Message} from 'iview';

const state = {
  novelList: {}
};

// getters
const getters = {
  novelList: state => state.novelList
};

// actions
const actions = {
  // 获取切题结果
  async getBook ({ commit }, payload) {
    let data = await IFan.getBook(payload);
    console.log(data)
    commit(types.NOVELLIST, data);
  }
};

// mutations
const mutations = {
  [types.NOVELLIST] (state, payload) { // 获取切题结果
    state.novelList = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
