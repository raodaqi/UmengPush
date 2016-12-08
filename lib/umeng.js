/**
 * Created by Raodaqi on 2016/12/8.
 */
'use strict';
var notification = require('./notification');
exports.send = send;
exports.config = require('./config');

function send(callback){
	notification.send(callback);
}
