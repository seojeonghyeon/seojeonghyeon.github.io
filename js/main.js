var request = require('request'),
    cheerio = require('cheerio');

var url = "https://sites.google.com/view/seonho-shin-economics/home";
 

request(url, function (err, res, html) {
    if (!err) {
        var $ = cheerio.load(html);
        $(".entry-title > a").each(function () {
            var post = {"title": "", "link": "", "summary": "", "category": []};
            var data = $(this);
            
            post["title"] = data.text();
            post["link"] = data.attr("href");
        });
    }
})