import Vue from 'vue';
const apiBase = process.env.NODE_ENV == 'production' ? '' : '/apis/';
let post = function ({url, data}) {
  url = apiBase + url
  return new Promise((resolve, reject) => {
    Vue.http.post(url, data || {}).then((res) => {
      if (typeof res.body !== 'string') {
        resolve(res.body);
      } else {
        reject(res.body);
      }
    });
  });
};
let get = function ({url, data}) {
  url = apiBase + url
  return new Promise((resolve, reject) => {
    Vue.http.get(url, data || {}).then((res) => {
      if (typeof res.body !== 'string') {
        resolve(res.body);
      } else {
        reject(res.body);
      }
    },(err)=>{
      console.log(err)
    });
  });
};

export default {
  post: post,
  get: get
};