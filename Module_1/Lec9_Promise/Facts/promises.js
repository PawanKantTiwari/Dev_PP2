const fs = require("fs");
let pendingPromises = fs.promises.readFile("./f1.txt");
console.log(pendingPromises);

pendingPromises.then(function(data)
{
    console.log(data+"");
});

pendingPromises.catch(function(error)
{
    console.log(error+"");
});