let fs = require("fs");
let f1KaData = fs.readFileSync("./f1.txt");
f1KaData = f1KaData+"";
let data = f1KaData.split("\n");
//console.log(data);




//**********************************************************************************************
//-s => remove 2nd non empty lines onwards
let count = 0;
for(let i = 0; i<data.length; i++)
{
    if(data[i] == '\r')
    {
        ++count;
        if(count == 1)
        {
            console.log(data[i]);
        }
    }else
    {
        console.log(data[i]);
    }
}



//*********************************************************************************************
//-b => add line number to only non-empaty line
// count = 0;
// let line = 1;
// for(let i = 0; i<data.length; i++)
// {
//     if(data[i] == '\r')
//     {
//         // ++count;
//         // if(count == 1)
//         {
//             console.log(data[i]);
//         }
//     }else
//     {
//         console.log(line + "." +data[i]);
//         line++;
//     }
// }





//*****************************************************************************************************
//-n => add line number to each line
// count = 0;
// line = 1;
// for(let i = 0; i<data.length; i++)
// {
//     if(data[i] == '\r')
//     {
//         // ++count;
//         // if(count == 1)
//         {
//             console.log(line+"." + data[i]);
//             line++;
//         }
//     }else
//     {
//         console.log(line + "." +data[i]);
//         line++;
//     }
// }