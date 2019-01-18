var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
/* GET home page. */
router.get('/', function(req, res, next) {
  request("https://www.imdb.com/chart/top?ref_=nv_mv_250", function(err, success, html){
  	if(success)
  	{
  		var $ = cheerio.load(html);
  		var movie = $(".lister-list");
  		// return res.render("index", { data : success})
  		console.log(movie.html());
  		var success = movie.html();
  		return res.render("index", { data : success})
  	}
  	else
  	{
  		console.log(err);
  	}
  });
});

module.exports = router;
