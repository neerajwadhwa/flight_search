var express = require('express');
var getFlight = require('./getflight.js');

var message = {"message": "this is a **laughs in evil**"};


var app = express();

app.get('/api/v1', (req, res)=>{
	res.json(message);
});

app.get('/api/v1/flights/all', (req, res)=>{
	res.json(getFlight.flightData);	
});

app.get('/api/v1/flights', (req, res)=>{
	var src = req.query.src;
	var dst = req.query.dst;
	var doj = req.query.doj;

	var flight = getFlight.getFlight(req, res, src, dst, doj);
	res.json(flight)
});

app.listen(3000, ()=>{
	console.log("Server running on localhost:3000");
});