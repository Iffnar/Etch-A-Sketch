
let gridSize = prompt("Select the grid-Size. Pick a number higher than 32 for a sizable grid");
const wrapper = document.querySelector(".wrapper");
let divs;

createGrid(gridSize);

//create the grid
function createGrid (gridSize) {
    
    for (let i=0; i < (gridSize * gridSize); i++) {
        document.getElementById("wrapper").style.gridTemplateColumns =  `repeat(${gridSize}, 1fr)`;
        document.getElementById("wrapper").style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        
        divs = document.createElement("div");
        divs.classList.add("gridPart");
        document.getElementById("wrapper").appendChild(divs);
}    
}



//hover-functionality
let grid =  Array.from(document.querySelectorAll(".gridPart"));
console.log(grid)
grid.forEach(gridPart => gridPart.addEventListener("mouseover", () => gridPart.classList.add("hover")));





