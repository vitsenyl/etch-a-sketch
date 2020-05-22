let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
const gridContainer = document.querySelector(".sketchGrid");

// document.documentElement.style.setProperty("--rowNum", 6); Sets number of rows
// document.documentElement.style.setProperty("--colNum", 6);

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

function clearGrid() {
    gridSquares.forEach(gridSquare => gridSquare.style = '');
}

generateGrid(rowNum);

document.querySelector("#clear").onclick = () => {clearGrid()};

const gridSquares = document.querySelectorAll(".gridSquare");
gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseenter', fillSquare));