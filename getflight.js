var flightData = require('./flightdata');
var utils = require('./utils.js');
var flight;
var flightInstance;
var found = false;
var dateMatches = false;

var count = 1;

var getFlight = function(req, res, src, dst, doj){

	if(src === undefined || dst === undefined || doj === undefined){
    	flight = {"message": "please provide all required params (src, dst, doj)"};
      	res.status(422);
      	res.statusMessage ="Missing Required Param";
      	res.json({"message": "Please provide all required params as src, dst, doj"});
      	return;
  	}

	flightData.flightData.forEach(function(flightInstance){

		dateMatches = utils.compareDate(flightInstance.doj, doj);
		console.log(dateMatches);
		if(dateMatches){
			if(flightInstance.src === src && flightInstance.dst === dst){
      		console.log("in get data condition");
      		res.status(200);
        	res.statusMessage = "Flight Found";
        	found = true;
			res.json(flightInstance);
			}
		}
  	});
  	console.log(count++);
  	if(!found){
  		res.status(404);
  		res.statusMessage = "Flight Not Found";
    	res.json({"message": "No flights with these details are found"});
  	}
};
module.exports.getFlight = getFlight;
module.exports.flightData = flightData;