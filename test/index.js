/**
 * Created by Raodaqi on 2016/12/8.
 */
var umeng = require('../index');
umeng.config.APPKEY = "";
umeng.config.APP_MASTER_SECRET = "";
umeng.config.INFO = {
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