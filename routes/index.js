var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
/* GET home page. */
router.get('/', function(req, res, next) {
  request("https://www.imdb.com/chart/top?ref_=nv_mv_250", function(err, success, html){
  	if(success)
  	{
      var data = {};
  		var $ = cheerio.load(html);
  		$('tr').each((i, el) => {
      const title = $(el)
        .find('.titleColumn')
        .text();
      const link = $(el)
        .find('.secondaryInfo')
        .text();
      // const date = $(el)
      //   .find('.post-date')
      //   .text()
      //   .replace(/,/, '');

      // Write Row To CSV
      data.push({title : title, link: link});
      console.log(`${title}, ${link}\n`);
    });
  		// return res.render("index", { data : success})
  	}
  	else
  	{
  		console.log(err);
  	}
  });
});

module.exports = router;
