var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');


/* GET home page. */
router.get('/', function(req, res, next) {
	const url = 'http://192.168.43.254:8080';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request
        var latlng = [];
        var $ = cheerio.load(html);
        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
            //console.log(response);
            var inputs = $('h3');
            //console.log(inputs.eq(0).text());
            //console.log(html);
            // Finally, we'll define the variables we're going to capture
            var str = inputs.eq(0).text();
            console.log("STR",str)
            var jsonData = JSON.parse(str.toString());//kormaangala mgRoad bellandur rv
    		console.log(jsonData);
          	if(jsonData["bulb_1"] === "ON" && jsonData["bulb_2"] === "ON" && jsonData["bulb_3"] === "ON" && jsonData["bulb_4"] === "ON"){
              res.json('{"bulb":[],"msg":"NONE OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "OFF" && jsonData["bulb_2"] === "ON" && jsonData["bulb_3"] === "ON" && jsonData["bulb_4"] === "ON"){
          	res.json('{"bulb":[{"lat":12.9279, "lng":77.6271}],"msg":"LIGHT 1 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "ON" && jsonData["bulb_2"] === "OFF" && jsonData["bulb_3"] === "ON" && jsonData["bulb_4"] === "ON"){
            res.json('{"bulb":[{"lat": 12.9766, "lng": 77.5993}],"msg":"LIGHT 2 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "OFF" && jsonData["bulb_2"] === "OFF" && jsonData["bulb_3"] === "ON" && jsonData["bulb_4"] === "ON"){
            res.json('{"bulb":[{"lat":12.9279, "lng":77.6271},{"lat": 12.9766, "lng": 77.5993}],"msg":"Light 1,2 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "ON" && jsonData["bulb_2"] === "ON" && jsonData["bulb_3"] === "OFF" && jsonData["bulb_4"] === "ON"){
            res.json('{"bulb":[{"lat":12.9221, "lng":77.4976}],"msg":"Light 3 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "OFF" && jsonData["bulb_2"] === "ON" && jsonData["bulb_3"] === "OFF" && jsonData["bulb_4"] === "ON"){
            res.json('{"bulb":[{"lat":12.9279, "lng":77.6271},{"lat":12.9221, "lng":77.4976}],"msg":"Light 1,3 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "ON" && jsonData["bulb_2"] === "OFF" && jsonData["bulb_3"] === "OFF" && jsonData["bulb_4"] === "ON"){
            res.json('{"bulb":[{"lat": 12.9766, "lng": 77.5993},{"lat":12.9221, "lng":77.4976}],"msg":"Light 2,3 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "OFF" && jsonData["bulb_2"] === "OFF" && jsonData["bulb_3"] === "OFF" && jsonData["bulb_4"] === "ON"){
            res.json('{"bulb":[{"lat":12.9279, "lng":77.6271},{"lat": 12.9766, "lng": 77.5993},{"lat":12.9221, "lng":77.4976}],"msg":"Light 1,2,3 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "ON" && jsonData["bulb_2"] === "ON" && jsonData["bulb_3"] === "ON" && jsonData["bulb_4"] === "OFF"){
            res.json('{"bulb":[{"lat":12.9105, "lng":77.5857}],"msg":"Light 4 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "OFF" && jsonData["bulb_2"] === "ON" && jsonData["bulb_3"] === "ON" && jsonData["bulb_4"] === "OFF"){
            res.json('{"bulb":[{"lat":12.9279, "lng":77.6271},{"lat":12.9105, "lng":77.5857}],"msg":"Light 1,4 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "ON" && jsonData["bulb_2"] === "OFF" && jsonData["bulb_3"] === "ON" && jsonData["bulb_4"] === "OFF"){
            res.json('{"bulb":[{"lat": 12.9766, "lng": 77.5993},{"lat":12.9105, "lng":77.5857}],"msg":"Light 2,4 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "OFF" && jsonData["bulb_2"] === "OFF" && jsonData["bulb_3"] === "ON" && jsonData["bulb_4"] === "OFF"){
            res.json('{"bulb":[{"lat":12.9279, "lng":77.6271},{"lat": 12.9766, "lng": 77.5993},{"lat":12.9105, "lng":77.5857}],"msg":"Light 1,2,4 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "ON" && jsonData["bulb_2"] === "ON" && jsonData["bulb_3"] === "OFF" && jsonData["bulb_4"] === "OFF"){
            res.json('{"bulb":[{"lat":12.9221, "lng":77.4976},{"lat":12.9105, "lng":77.5857}],"msg":"Light 3,4 OFF"}');
             
          }
          else if(jsonData["bulb_1"] === "OFF" && jsonData["bulb_2"] === "ON" && jsonData["bulb_3"] === "OFF" && jsonData["bulb_4"] === "OFF"){
            res.json('{"bulb":[{"lat":12.9279, "lng":77.6271},{"lat":12.9221, "lng":77.4976},{"lat":12.9105, "lng":77.5857}],"msg":"Light 1,3,4 OFF"}');
              console.log(data.toString());
          }
          else if(jsonData["bulb_1"] === "ON" && jsonData["bulb_2"] === "OFF" && jsonData["bulb_3"] === "OFF" && jsonData["bulb_4"] === "OFF"){
            res.json('{"bulb":[{"lat": 12.9766, "lng": 77.5993},{"lat":12.9221, "lng":77.4976},{"lat":12.9105, "lng":77.5857}],"msg":"Light 2,3,4 OFF"}');
             
          }
          else{
            res.json('{"bulb":[{"lat":12.9279, "lng":77.6271},{"lat": 12.9766, "lng": 77.5993},{"lat":12.9221, "lng":77.4976},{"lat":12.9105, "lng":77.5857}],"msg":"All OFF"}');
   
          }
        }
    })
});

router.get('/maps',function(req,res,next) {
	res.render('index');
})


module.exports = router;
