const gridContainer = document.querySelector('div.grid-container')

const gridColTemplate = document.createElement('div')
gridColTemplate.classList.add('grid-col')

const gridItemTemplate = document.createElement('div')
gridItemTemplate.classList.add('grid-item')

for (let i=0; i<16; i++) {
    let gridCol = gridColTemplate.cloneNode()
    gridContainer.appendChild(gridCol)
    for (let j=0; j<16; j++) {
        let gridItem = gridItemTemplate.cloneNode()
        gridItem.addEventListener('mouseover', handleHover)
        gridCol.appendChild(gridItem)
    };
}

function resizeGrid (resizeInput) {
    for (let i=0; i<resizeInput; i++) {
        let gridCol = gridColTemplate.cloneNode()
        gridContainer.appendChild(gridCol)
        for (let j=0; j<resizeInput; j++) {
            let gridItem = gridItemTemplate.cloneNode()
            gridItem.addEventListener('mouseover', handleHover)
            gridCol.appendChild(gridItem)
        };
    }
}

function handleHover (event) {
    event.target.style.backgroundColor = 'blue'
}

// function handleClick (event) {

// }

let resizeInput = document.querySelector('.resizeInput').value

const resizeButton = document.querySelector('button')
// resizeButton.addEventListener('click', handleClick)

console.log(resizeInput)

