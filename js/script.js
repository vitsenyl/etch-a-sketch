let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
let gridContainer = document.querySelector(".sketchGrid");

// document.documentElement.style.setProperty("--rowNum", 6); Sets number of rows
// document.documentElement.style.setProperty("--colNum", 6);

function generateGrid(number) {
    
    let gridTemplate = document.createElement('div');
    gridTemplate.classList.add("gridSquare");

    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < rowNum; j++) {
            let gridDiv = gridTemplate.cloneNode(true);
            gridDiv.setAttribute('id', `${i}-${j}`);
            gridContainer.appendChild(gridDiv);
        }
    }
}

generateGrid();