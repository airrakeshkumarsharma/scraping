var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
/* GET home page. */
router.get('/', function(req, res, next) {
  request("https://www.imdb.com/chart/top?ref_=nv_mv_250", function(err, success){
  	if(success)
  	{
  		return res.render("index", { data : success})
  	}
  	else
  	{
  		console.log(err);
  	}
  });
});

module.exports = router;
