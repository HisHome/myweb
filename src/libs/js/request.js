
import Fetch from 'node-fetch';

export default function request ({url, data}) {
    console.log(process.env.NODE_ENV);
    const apiBase = process.env.NODE_ENV == 'production' ? 'http://web.exercise.willclass.com' : '/apis';
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
