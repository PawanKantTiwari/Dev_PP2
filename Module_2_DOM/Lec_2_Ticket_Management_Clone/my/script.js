let allFilter = document.querySelectorAll(".filters div");
let filterColor = [
        {name:"R", code:"ff0000"},
        {name:"Blue", code:"#0984e3"},
        {name:"G", code:"008000"},
        {name:"B", code:"000000"},
];

let container = document.querySelectorAll('.container');

for(let i=0;i<allFilter.length;i++)
{
    allFilter[i].addEventListener("click",chooseFilter);
}

function chooseFilter(e)
{
    console.log(e.target.classList[1]);
        let filter = e.target.classList[1];,
        let filterCode;
        for(let i=0;i<filterColor.length;i++)
            {
                if(filterColor[i].name == filter)
                {
                    filterCode = filterColor[i].code;
                }
            }
            console.log(filterCode)
            container.style.background = filterCode;
        }