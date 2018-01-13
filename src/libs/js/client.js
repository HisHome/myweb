/*
 * @Author: willclass
 * @Date:   2015-10-28 14:41:09
 * @Last Modified by: pyang
 * @Last Modified time: 2018-01-13 17:24:14

 */

'use strict';
var config = {
    'development': {
        host: '172.16.10.42',
        port: 8106
    },
    'production': {
        host: 'web.exercise.willclass.com',
        port: 80
    }
};

var env = process.env.NODE_ENV;
console.log(env + '===========');
var Url = require('url');
var http = require('http'),
    cookie = '',
    host = config[env]['host'],
    type = 'application/json',
    method = 'POST',
    port = config[env]['port'];

var client = {
    post: function (url, data, callback) {
        let time = new Date();
        if (url.indexOf('http://') > -1) {
            host = Url.parse(url).host;
            url = Url.parse(url).path;
            port = 80;
        } else {
            host = config[env]['host'];
            port = config[env]['port'];
        };

        console.log('请求开始:', host, port, url);
        var _data = JSON.stringify(data),
            _datalth = Buffer.byteLength(_data, 'utf8');
        console.log(this.headers);
        var _options = {
            protocol: 'http:',
            hostname: host,
            port: port,
            path: url,
            method: method,
            headers: {
                // 'X-HT-SSO-HOST':config.sso,
                'User-Agent': '',
                // 'User-Agent': this.headers["user-agent"],
                'Content-Type': type,
                'Content-Length': _datalth,
                // 'Cookie':  decodeURIComponent(this.headers.cookie) || ""
                'Cookie': ''
            }
        };
        // console.log(_options)

        var _req = http.request(_options, function (res) {
            // console.info(res);
            var str = '';

            if (res.statusCode != 200) {
                console.log(res.statusCode + ':' + url + ':' + (new Date().getTime() - time) + 'ms');
                callback(res.statusCode);
                return;
            }
            res.setEncoding('utf8');
            res.on('data', function (body) {
                str += body;
            });

            res.on('end', function () {
                try {
                    console.log(res.statusCode + ':' + url + ':' + (new Date().getTime() - time) + 's 返回码:' + JSON.parse(str).status);
                    if (JSON.parse(str).status != 0) console.info(JSON.parse(str).msg);
                    callback(JSON.parse(str));
                } catch (e) {
                    callback(str);
                }
            });
        });
        _req.on('error', function (e) {
            console.info('数据获取失败:',e);
            callback('数据获取失败');
        });
        _req.write(_data);
        _req.end();
    }
};

module.exports = client;
