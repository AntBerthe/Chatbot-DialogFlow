var apiai = require('apiai');
var app = apiai('dc017aac3d4d4828bc214bf7fdaeda91');

var getRes = function(query) {
  var request = app.textRequest(query, {
      sessionId: '<unique session id>'
  });
	const responseFromAPI = new Promise(
			function (resolve, reject) {
	request.on('error', function(error) {
		reject(error);
	});
	request.on('response', function(response) {
	  resolve(response.result.fulfillment.speech);
	});
	});
	request.end();
	return responseFromAPI;
};

//getRes('hello').then(function(res){console.log(res)});

module.exports = {getRes}
