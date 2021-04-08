const puppeteer = require("puppeteer");
let browserOpenPromises = puppeteer.launch({headless: false});
browserOpenPromises.then(function(browser){
    console.log("browser Opened Successfully");
    let allOpenedTabPromises =  browser.pages();
    return allOpenedTabPromises;
}).then(function(pages)
{
    let firstOpenedTab = pages[0];
    let pageOpenPromises = firstOpenedTab.goto("httpkjn://google.com");
    return pageOpenPromises;
}).then(function(){
    console.log("Google Opened");
}).catch(function(error){
    console.log("error");
})
