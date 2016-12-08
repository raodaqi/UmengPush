/**
 * Created by Raodaqi on 2016/12/8.
 */
var config = require('../lib/config');
var umeng = require('../lib/umeng');
config.APPKEY = "";
config.APP_MASTER_SECRET = "";
config.INFO = {
	'device_tokens': "",
    'type': 'unicast',
    'payload': {'body': {'ticker': 'Hello World',
                               'title':'你好',
                               'text':'来自友盟推送',
                               'after_open': 'go_app'},
                      'display_type': 'notification'
    }
},
umeng.send({
	success:function(result){
		console.log(result.text);
	},
	error:function(error){
		console.log(error.text);
	}
})