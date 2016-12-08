/**
 * Created by Raodaqi on 2016/12/8.
 */
'use strict';
var superagent = require('superagent');
var crypto = require('crypto');
var config = require('./config');

exports.send  = send;

function nativeConvertAscii(str) {
  var ascii = '';
  var charAscii;
  for(var i = 0; i != str.length; i++) {
    var code = Number(str[i].charCodeAt(0));
    if(code > 127) {
      charAscii = code.toString(16);
      charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
      ascii += "\\u" + charAscii;
    } else {
      ascii += str[i]
    }
  }
  return ascii;
}
function _sign(val){
  return crypto.createHash('md5').update(val).digest('hex');
}

function send(callback) {
  var method = "POST";
  var timestamp = new Date().getTime();
  console.log(config.APPKEY);
  config.INFO.appkey = config.APPKEY;
  config.INFO.timestamp = timestamp;
  try{
    var post_body = JSON.stringify(config.INFO);
  }catch(err){
    throw new Error(err);
  }
  console.log(post_body);
  post_body = nativeConvertAscii(post_body);
  var hasher = crypto.createHash("md5");
  hasher.update(method+config.URL+post_body+config.APP_MASTER_SECRET);
  var sign = hasher.digest('hex');
  superagent.post(config.URL+"?sign="+sign)
    .send(post_body)
    .end((err, result) => {
      if(err){
        callback.error(err);
        return;
      }
      callback.success(result);
    })
}