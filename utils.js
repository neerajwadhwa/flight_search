
module.exports.compareDate = function(dateFromData, dateFromQuery){
	
	var matches = false;
	console.log(dateFromData);
	console.log(dateFromQuery);

	splitedDateFromData = dateFromData.split('-');
	splitedDateFromQuery = dateFromQuery.split('-');

	if(splitedDateFromData[0] === splitedDateFromQuery[0] && splitedDateFromData[1] === splitedDateFromQuery[1] && splitedDateFromData[2] === splitedDateFromQuery[2]){
  		matches = true;
	}
	else{
		matches = false;
	}
	return matches;
};