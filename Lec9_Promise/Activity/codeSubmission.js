const puppeteer = require("puppeteer");
const id = "yekona7251@ddwfzp.com"; //login id
const pass = "123456789";
let firstOpenedTab;  //sir was using 'tab'


let browserOpenPromises = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    slowMo: 100 //to slow the speed of working
});
browserOpenPromises.then(function(browser){
    console.log("browser Opened Successfully");
    let allOpenedTabPromises =  browser.pages();
    return allOpenedTabPromises;
}).then(function(pages)
{ 
    firstOpenedTab = pages[0];
    let pageOpenPromises = firstOpenedTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    return pageOpenPromises;
}).then(function(){
    console.log("HackerRank Login Page Opened");
    let idTypePromise = firstOpenedTab.type("#input-1",id);
    return idTypePromise;
}).then(function(){
    let passTypePromise = firstOpenedTab.type("#input-2",pass);
    return passTypePromise;
}).then(function(){
    let loginPromise = firstOpenedTab.click('#tab-1-content-1 > div.login-form.auth-form.theme-m > form > div.form-item.clearfix > button > div > span');
    return loginPromise;
}).catch(function(error)
{
    console.log("Something Went Wrong");
})
