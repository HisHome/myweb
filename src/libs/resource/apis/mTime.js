import request from '../post.js';

// 正在售票(包括正在热映和即将上映)
// https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290
function getHotPlayMovies(data) {
  return request.post({url: '/mTime/PageSubArea/HotPlayMovies.api', data: data});
}

// 正在热映
// https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290
function getLocationMovies(data) {
    return request.post({url: '/mTime/Showtime/LocationMovies.api', data: data});
}

// 即将上映
// https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290
function getMovieComingNew(data) {
    return request.post({url: '/mTime/Movie/MovieComingNew.api', data: data});
}

// 影片详情
// https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805
function getMovieDetail(data) {
    return request.post({url: '/mTime/movie/detail.api', data: data});
}

// 演职员表
// https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api?movieId=217896
function getMovieCreditsWithTypes(data) {
    return request.post({url: '/mTime/Movie/MovieCreditsWithTypes.api', data: data});
}

// 影片评论
// https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId=125805
function getHotComment(data) {
    return request.post({url: '/mTime/movie/hotComment.api', data: data});
}

// 预告片&拍摄花絮
// https://api-m.mtime.cn/Movie/Video.api?pageIndex=1&movieId=217896
function getVideo(data) {
    return request.post({url: '/mTime/Movie/Video.api', data: data});
}

// 剧照
// https://api-m.mtime.cn/Movie/ImageAll.api?movieId=217896
function getImageAll(data) {
    return request.post({url: '/mTime/Movie/ImageAll.api', data: data});
}




export {
    getHotPlayMovies,
    getLocationMovies,
    getMovieComingNew,
    getMovieCreditsWithTypes,
    getMovieDetail,
    getHotComment,
    getVideo,
    getImageAll,
};
