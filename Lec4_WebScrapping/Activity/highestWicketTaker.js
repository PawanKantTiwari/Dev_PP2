const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url,cb);
function cb(error,response,data)
{
        parseData(data);
}
  
let highestWicketTaker = {};//creating an object who will store the data of highestWicketTaker Player
function parseData(html)
{
    let ch = cheerio.load(html);
    let bothBowlingTables = ch('.Collapsible .table.bowler');

    let highestWicketTakerSoFar = 0;
    let nameOfHighestWicketTaker;
    let economy;

    for(let i=0; i<bothBowlingTables.length; i++)
    {
        let bowlingTable = bothBowlingTables[`${i}`];
        fs.writeFileSync("./bowlingTable.html",bothBowlingTables+"");//converting object file(i.e. bowlingTable) into a HTML file
        let allTrs = ch(bowlingTable).find("tbody tr");
        for(let j=0; j<allTrs.length; j++)
        {
            let allTds = ch(allTrs).find("td");
            if(highestWicketTakerSoFar < ch(allTds[4]).text())
            {
                highestWicketTakerSoFar = ch(allTds[4]).text();
                nameOfHighestWicketTaker = ch(allTds[0]).text();
                economy = ch(allTds[5]).text();
            }
        }
        
    }
    // console.log(highestWicketTakerSoFar + "\n" + nameOfHighestWicketTaker + "\n" + economy);
    highestWicketTaker.name = nameOfHighestWicketTaker;
    highestWicketTaker.wickets = highestWicketTakerSoFar;
    highestWicketTaker.economy = economy;
    console.log(highestWicketTaker);


}