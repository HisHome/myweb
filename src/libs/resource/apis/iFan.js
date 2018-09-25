import request from '../post.js';

// 番茄计划
function getBook(data) {
  return request.post({url: '/iDataApi/book/bangumi', data: data});
}

export {
  getBook
};
