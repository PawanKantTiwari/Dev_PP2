const request = require("request");
const cheerio = require("cheerio");

// Start := CrickInfo se data mangwaya
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url,function cb(error,response,body)
{
    parseBody(body);
});

function parseBody(html)
{
    let ch = cheerio.load(html);
    let aTag = ch('a[data-hover="View All Results"]');
    console.log(ch(aTag).text());
}// end := CrickInfo se data mangwaya

