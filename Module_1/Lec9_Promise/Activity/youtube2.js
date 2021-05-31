const puppeteer = require("puppeteer");
let OpenedTab;
let siteName = "wwe wrestlemania winner list";
let browserOpenPromises = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    // slowMo: 100 //to slow the speed of working
});

browserOpenPromises.then(function(browser){
    let allOpenedTabPromises =  browser.pages();
    return allOpenedTabPromises;
}).then(function(pages){
    OpenedTab = pages[0];
    let pageOpenPromises = OpenedTab.goto("https://www.google.com/");
    return pageOpenPromises;
}).then(function(){
    let clickSearchBar = OpenedTab.click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
    return clickSearchBar;
}).then(function(){
    let typeSite = OpenedTab.type('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input',siteName);
    return typeSite;
})
.then(function(){
    let clickSearch = OpenedTab.click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > div.tfB0Bf > center > input.gNO89b');
    return clickSearch;
}).then(function(){
    let waitAndClickPromise = waitAndClick('#rso > div:nth-child(2) > div > div.kp-blk.c2xzTb > div > div.ifM9O > div > div.g > div > div.yuRUbf > a > h3')
    return waitAndClickPromise;
})



function waitAndClick(selector){
    return new Promise(function(resolve,rejected){
        let waitPromise = OpenedTab.waitForSelector(selector,{visible:true});
        waitPromise.then(function(){
            let clickPromise = OpenedTab.click(selector);
            return clickPromise;
        }).then(function(){
            resolve();
        }).catch(function(error){
            rejected(error);   
        })
    })
}
