/*
* @Author: willclass
* @Date:   2016-11-03 20:02:37
 * @Last Modified by: pyang
 * @Last Modified time: 2018-01-13 17:24:17
*/

'use strict';
const client = require('./tools/client.js');

function Enter (req,res,next) {
    req._post = client.post;
    res.header('X-Powered-By', 'willclass.com');

    next();
}
module.exports = Enter;
