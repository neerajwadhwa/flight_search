var flightData = require('./flightdata');
var flight;
var flightInstance;

var getFlight = function(req, res, src, dst, doj){
		flightData.flightData.forEach(function(flightInstance){
			console.log(flightInstance);
			if(src === undefined || dst === undefined || doj === undefined){
				flight = {"message": "please provide all required params (src, dst, doj)"};
			}
			
			else if(flightInstance.src === src && flightInstance.dst === dst && flightInstance.doj === doj){
				flight = flightInstance;	
			}
			else{
				flight = {"message": "No flights with these details are found"};
				res.status(404);
				res.statusMessage = "Flight you are looking for is not available";
			}
		})
		return flight;
};

module.exports.getFlight = getFlight;
module.exports.flightData = flightData;