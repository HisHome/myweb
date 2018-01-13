const express = require('express');
const router = express.Router();
const client = require('./js/client.js');
// const staticConf = require("../static.config.js");
// const env = process.env.NODE_ENV;

// /* function handle(url,callback) {
// 	req._post(url, req.body, function(data) {
// 		callback?callback():null;
// 		res.json(data);
// 		res.end();
// 	})
// } */

// 录题监控详情
router.post('/exerciseapi/monitordetail', function (req, res, next) { // 提交任务
    client.post('/exerciseapi/user/login', req.body, function (data) {
        res.json(data);
        res.end();
    });
});

router.post('/*', function (req, res) {
    req._post(req.path, req.body, function (data) {
        res.json(data);
        res.end();
    });
});
router.use(function (req, res, next) {
    next(404);
});
module.exports = router;
