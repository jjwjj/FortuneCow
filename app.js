var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var twilio = require('twilio');
var exec = require("child_process").exec;
var twivars = require("./twicreds");

var cowNumber = twivars.twiNumber;
var accountSID = twivars.twiAccountSID;
var authToken = twivars.twiAuthToken;

function sendSms(smsFromStr,messageOut) {
  var client = new twilio.RestClient(accountSID,authToken);

  client.sms.messages.create({
    to:smsFromStr,
    from:cowNumber,
    body:messageOut},
    function(error,message) {
      if (!error) {
        console.log(messageOut);
				console.log(message);
      }
      else {
        console.log('error with SMS send');
        console.log(twivars.twiAccountSID);
        console.log(twivars.twiAuthToken);
        console.log(twivars.twiNumber);
      }
    }
  );

}


function sendFortune(smsFromStr) {

		exec("/usr/games/fortune -n 138 -s",function(err,stdout,stderr) {
			if (err) console.log("error encountered");

			var fortuneMsg = stdout;

			var apt = "";
			apt += "       \\   (__)"+"\r";
			apt += "           (oo)"+"\r";
			apt += "   /------\\/"+"\r";
			apt += "  / |      ||"+"\r";
			apt += " *  /\\---/\\"+"\r";
			apt += "    ~~   ~~"+"\r";
			
			var cow = "";
			cow += "O"+"\r";
			cow += " o  ^__^"+"\r";
			cow += "     (oo)\\_______"+"\r";
			cow += "     (__)\\              )\\/\\"+"\r";
			cow += "           ||------w |"+"\r";
			cow += "           ||           ||"+"\r";
      cow += "\rhttp://goo.gl/aSVKAY\r";
			
			sendSms(smsFromStr,fortuneMsg);
			setTimeout(function() {sendSms(smsFromStr,cow)},1500);


		});
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("*", function(req,res) {
  var fromNum = req.body.From;

  console.log("received an sms request");
	sendFortune(fromNum);

});

app.listen(8001);
console.log("listening on port 8001");
