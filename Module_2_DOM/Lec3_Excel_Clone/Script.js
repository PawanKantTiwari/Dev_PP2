let cellsContent = document.querySelector(".cells-content");

//init => intialize cells
function initCells(){
    // <div class="row">
    // <div class="cell"></div>
    // <div class="cell"></div>
    // <div class="cell"></div>
    // <div class="cell"></div>
    // <div class="cell"></div>
    // <div class="cell"></div>
    // </div>
    let cells = "";
    for(let i=0 ; i<100 ; i++){
        cells += "<div class='row'>"
        for(let j=0 ; j<26 ; j++){
            cells += "<div class='cell'>Cell</div>"
        }
        cells += "</div>"
    }
    cellsContent.innerHTML = cells;
}
initCells();