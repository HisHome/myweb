import Vue from 'vue';

export default function post ({url, data}) {
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
