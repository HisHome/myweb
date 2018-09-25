import Vue from 'vue';
// let katex = require('katex');
Vue.filter('formatDate', (value, fmt) => {
  var _date = new Date(value);
  fmt = fmt || 'yyyy-MM-dd hh:mm:ss';
  var o = {
    'M+': _date.getMonth() + 1, // 月份
    'd+': _date.getDate(), // 日
    'h+': _date.getHours(), // 小时
    'm+': _date.getMinutes(), // 分
    's+': _date.getSeconds(), // 秒
    'q+': Math.floor((_date.getMonth() + 3) / 3), // 季度
    'S': _date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
  }
  return fmt;
});

Vue.filter('optionTitle', function (index) { // 返回26个大写字母
  return String.fromCharCode(65 + index);
});
Vue.filter('keepTwo', function (str) { // 返回带两位小数的值
  return Math.round(str);
});
Vue.filter('httpImgUrl', function (str) { // 返回带两位小数的值
  if (str.indexOf('http//') > -1){
      str = str.replace(/http\/\//,'http://')
  } else if (str.indexOf('https//') > -1){
      str = str.replace(/https\/\//,'https://')
  }
  return str;
});
 