var gcm = require('node-gcm');
var fse = require('fs-extra');

var message = new gcm.Message();

message.addData('message', 'ทดสอบส่งข้อความด้วย GCM');
message.addData('title', 'ประกาศ');

var ids = fse.readJsonSync('./ids.json');

var regTokens = ids;

// Set up the sender with you API key
var sender = new gcm.Sender('AIzaSyA_vHl6khNUwxIMSEPoLXywldPppvXlbDo');

// Now the sender can be used to send messages
sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if(err) console.error(err);
    else    console.log(response);
});

// Send to a topic, with no retry this time
sender.sendNoRetry(message, { topic: '/topics/global' }, function (err, response) {
    if(err) console.error(err);
    else    console.log(response);
});
