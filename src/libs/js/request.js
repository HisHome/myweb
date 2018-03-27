
import Fetch from 'node-fetch';
var config = {
    'local': {
        host: '172.16.10.40',
        port: 8106
    },
    'testa': {
        host: '172.16.10.41',
        port: 8106
    },
    'testb': {
        host: '172.16.10.42',
        port: 8106
    },
    'testc': {
        host: '172.16.10.45',
        port: 8106
    },
    'testd': {
        host: '172.16.10.46',
        port: 8106
    },
    'testf': {
        host: '172.16.10.25',
        port: 8106
    },
    'testg': {
        host: '172.16.10.26',
        port: 8106
    },
    'test': {
        host: '172.16.10.40',
        port: 8106
    },
    'zhitiku': {
        host: 'web.exercise.zhitiku.cn',
        port: 80
    },
    'online': {
        host: 'web.exercise.willclass.com',
        port: 80
    }
};

export default function request ({url, data}) {
    console.log(process.env.NODE_ENV);
    const apiBase = process.env.NODE_ENV == 'production' ? '' : '/apis';
    return Fetch(apiBase + url, {
    // return Fetch('http://httpbin.org/post', {
    // return Fetch(url, {
        method: 'POST',
        body: JSON.stringify(data || {}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((json) => {
        return json;
    });
};
