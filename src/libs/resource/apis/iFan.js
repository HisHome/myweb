import request from '../post.js';

// 番茄计划
function getBook(data) {
  return request.post({url: '/iDataApi/book/bangumi', data: data});
}
// 番茄计划
function getMusicList(data) {
  return request.post({url: '/iDataApi/album/bangumi', data: data});
}

export {
  getBook,
  getMusicList
};
