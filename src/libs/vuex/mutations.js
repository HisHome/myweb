import * as types from './mutation-types.js';
import VueRouter from '../../router/index.js';

export default {
  // [types.EXIT](state) {
  //   VueRouter.push({ name: 'login' });
  //   localStorage.removeItem('userInfo');
  // },
  // [types.UPDATE_USER_INFO](state, payload) {
  //   localStorage.setItem('userInfo', JSON.stringify(payload));
  //   state.userInfo = payload;
  // },
  // [types.UPDATE_OWNLIST] (state, payload) { // 更新我的任务列表
  //   state.ownList = payload;
  // },
  // [types.UPDATE_PAGELIST] (state, payload) { // 更新我的任务题目列表
  //   state.pageList = payload;
  // },
  // [types.PAGE_DETAIL_SWITCH] (state, payload) { // 切换详情显示
  //   let newObj = {...state.pageList};
  //   newObj.result[payload.index][payload.name] = !newObj.result[payload.index][payload.name];
  //   state.pageList = newObj;
  // }
};
