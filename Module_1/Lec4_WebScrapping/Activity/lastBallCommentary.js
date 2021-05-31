const request = require("request");
const cheerio = require("cheerio");

// Start := CrickInfo se data mangwaya
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
request(url,function cb(error,response,body)
{
    parseBody(body);
});

function parseBody(html)
{
    let ch = cheerio.load(html);
    let aTag = ch('div[itemprop="articleBody"]>p');
    let commentary = ch(aTag[0]).text();
    console.log(commentary)
}
// end := CrickInfo se data mangwaya