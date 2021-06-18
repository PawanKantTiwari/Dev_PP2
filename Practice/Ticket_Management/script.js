let filterColors = {
    "red" : "#e74c3c",
    "blue" : "#3498db",
    "green" : "#2ecc71",
    "black" : "#34495e",
}


let allFilters = document.querySelectorAll(".ticket-filters div");
let tiketsContainer = document.querySelector(".tickets-container");

for(let i = 0; i < allFilters.length; i++){
    allFilters[i].addEventListener("click", function chooseFilter(e){
    let filter = e.target.classList[1];
    let filterCode;
    filterCode = filterColors[filter];    
    tiketsContainer.style.background = filterCode;        
    });
}

// function chooseFilter(e){
//     let filter = e.target.classList[1];
//     let filterCode;
//     filterCode = filterColors[filter];    
//     tiketsContainer.style.background = filterCode;

// }