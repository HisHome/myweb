// 分发actions，页面的action同意dispatch到此进行逻辑处理
import * as types from './mutation-types.js';
import post from '@/libs/resource/post';
import {Message} from 'iview';
import VueRouter from '@/router/index.js';

// 注册 审题员
export const secondRegister = ({commit, dispatch}, payload) => {
  console.log('=========-----==========')
  // post({ url: '/second/register', data: payload }).then((data) => {
  //   Message.success('注册成功!');
  //   return post({ url: '/user/getinfo' });
  // }).then((data) => {
  //   commit(types.UPDATE_USER_INFO, data);
  //   setTimeout(function () {
  //     VueRouter.push({ path: '/' });
  //   }, 500);
  // });
};


