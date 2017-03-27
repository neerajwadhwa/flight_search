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

    	if(dateMatches && flightInstance.src === src && flightInstance.dst === dst){
      		console.log("in get data condition");
			flight = flightInstance;
        	found = true;
		}
		else{
			res.status(404);
  			res.statusMessage = "Flight Not Found";
		}
  	});
  	console.log(count++);
  	if(found === true){
  		res.status(200);
        res.statusMessage = "Flight Found";
    	// return flight;
    	res.json(flight);
  	}
  	else{
    	//return flight = {"message": "No flights with these details are found"};
    	res.json({"message": "No flights with these details are found"});
  	}
};
module.exports.getFlight = getFlight;
module.exports.flightData = flightData;