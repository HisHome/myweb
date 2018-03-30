
import Fetch from 'node-fetch';

export default function request ({url, data}) {
    const apiBase = process.env.NODE_ENV == 'production' ? '' : '/apis';
    return Fetch(apiBase + url, {
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
