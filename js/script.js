let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
const gridContainer = document.querySelector(".sketchGrid");
let gridSquares = document.querySelectorAll(".gridSquare");

/* Callback Functions*/
document.querySelector("#clear").onclick = () => {resetGame()};


/*Main Code*/

function generateGrid(number) {
    
    let gridTemplate = document.createElement('div');
    gridTemplate.classList.add("gridSquare");

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            let gridDiv = gridTemplate.cloneNode(true);
            gridDiv.setAttribute('id', `${i}-${j}`);
            gridContainer.appendChild(gridDiv);
        }
    }
}

function fillSquare() {
    this.style.backgroundColor = 'blue';
}

function resetGame(){
    clearGrid();

    rowNum = prompt("How many rows and columns do you want? (max 75)", '16');
    (rowNum > 75) ? rowNum = 75 : null;
    document.documentElement.style.setProperty("--rowNum", rowNum);
    generateGrid(rowNum);

    gridSquares = document.querySelectorAll(".gridSquare");
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseenter', fillSquare));
}

function clearGrid() {
    gridContainer.innerHTML = '';
}

resetGame()