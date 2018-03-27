import request from '../js/request.js';

// 三审 四审保存小问
function single (data) {
    return request({url: '/exerciseapi/fetch/regionTree', data: data});
    // return request({url: '/post', data: data});
}

export {
    single
};
