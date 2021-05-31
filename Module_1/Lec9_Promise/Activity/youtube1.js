const puppeteer = require("puppeteer");
let Opened;
let videoName = "awal Cration";
let browserOpenPromises = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    slowMo: 100 //to slow the speed of working
});

browserOpenPromises.then(function(browser){
    let allOpenedTabPromises =  browser.pages();
    return allOpenedTabPromises;
}).then(function(pages){
    OpenedTab = pages[0];
    let pageOpenPromises = OpenedTab.goto("https://www.youtube.com/");
    return pageOpenPromises;
}).then(function(){
    let clickVideo = OpenedTab.click('#search');
    return clickVideo;
}).then(function(){
    let typeVideo = OpenedTab.type('#search',videoName);
    return typeVideo;
}).then(function(){
    let clickSearch = OpenedTab.click('#search-icon-legacy');
    return clickSearch;
}).catch(function(error){
    console.log("error");
})