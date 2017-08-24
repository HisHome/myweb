/*
* @Author: willclass
* @Date:   2016-11-03 20:02:37
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-07 12:03:57
*/

'use strict';
const client = require("./tools/client.js");

function Enter(req,res,next){
	req._post = client.post;
	res.header("X-Powered-By", "willclass.com");
	
	next();

}
module.exports = Enter;
