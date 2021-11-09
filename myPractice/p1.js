// const puppeteer = require("puppeteer");
// const { jar } = require("request");
// const id = "yekona7251@ddwfzp.com"; //login id
// const pass = "yekona7251";
// let tab;

// let browserOpenePromise =  puppeteer.launch({headless : false, defaultViewport : null, args: ["--start-maximized"]});
// browserOpenePromise.then(function(browser){
//     let allPagesOpened = browser.pages();
//     return allPagesOpened;
// }).then(function(pages){
//     tab = pages[0];
//     let pageOpenPromise = tab.goto("https://www.linkedin.com/checkpoint/rm/sign-in-another-account?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin");
//     return pageOpenPromise;
// }).then(function(){
//     let idTypePromise = tab.type("#username",id);
//     return idTypePromise;
// }).then(function(){
//     let passTypePromise = tab.type("#password",pass);
//     return passTypePromise;
// }).then(function(){
//     let loginPromise = tab.click("#organic-div > form > div.login__form_action_container > button");
//     return loginPromise;
// })
// .then(function(){
//     let waitForSelectorPromise = tab.waitForSelector("#global-nav-typeahead > input"); 
//     return waitForSelectorPromise;
// }).then(function(){
//     let PawanTypePromise = tab.click("#global-nav-typeahead > input");
//     return PawanTypePromise;
// })
// .then(function(){
//     let ITKitPromise = tab.type("#global-nav-typeahead > input","Pawan Kant Tiwari");
//     return ITKitPromise;
// }).then(function(){
//     let searchPromise = tab.keyboard.press('Enter');
//     return searchPromise;
// }).then(function(){
//     let PawanClickPromise = tab.waitForSelector("#main > div > div > div:nth-child(1) > ul > li:nth-child(1) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div > div.t-roman.t-sans > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)");
//     return PawanClickPromise;
// })
// .then(function(){
//     let PawanClickPromise = tab.click("#main > div > div > div:nth-child(1) > ul > li:nth-child(1) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div > div.t-roman.t-sans > div > span.entity-result__title-line.flex-shrink-1.entity-result__title-text--black > span > a > span > span:nth-child(1)");
//     return PawanClickPromise;
// })
let a = 6;
function fun(){
    a = 20;
    console.log(a);
}
fun();
console.log(a);