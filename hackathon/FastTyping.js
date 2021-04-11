const request = require("request");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const fs = require("fs");

// web scraping
let url = "https://thepracticetest.com/typing/tests/practice-paragraphs/";
request(url,cb);
function cb(error,response,data)
{
        parseData(data);
}

function parseData(html)
{
    let ch = cheerio.load(html);
    let words = ch('#typed');
    typedWords = ch(words).text();
    // fs.writeFileSync("./typedWords.html",words+"");
    
}


//Automation
let browserOpenPromises = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
});

browserOpenPromises.then(function(browser){
    let allOpenedTabPromises =  browser.pages();
    return allOpenedTabPromises;
}).then(function(pages)
{ 
    firstOpenedTab = pages[0];
    let pageOpenPromises = firstOpenedTab.goto("https://thepracticetest.com/typing/tests/practice-paragraphs/");
    return pageOpenPromises;
}).then(function(){
    // let url = "https://thepracticetest.com/typing/tests/practice-paragraphs/";
    let idTypePromise = firstOpenedTab.type("#typing",typedWords);
    return idTypePromise;
})