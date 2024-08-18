const gridContainer = document.querySelector('div.grid-container')

const gridColTemplate = document.createElement('div')
gridColTemplate.classList.add('grid-col')

const gridItemTemplate = document.createElement('div')
gridItemTemplate.classList.add('grid-item')

let resizeNum = 16

resizeGrid(resizeNum)

function resizeGrid (resizeNum) {
    gridContainer.innerHTML = ''
    for (let i=0; i<resizeNum; i++) {
        let gridCol = gridColTemplate.cloneNode()
        gridContainer.appendChild(gridCol)
        for (let j=0; j<resizeNum; j++) {
            let gridItem = gridItemTemplate.cloneNode()
            gridItem.addEventListener('mouseover', handleHover)
            gridCol.appendChild(gridItem)
        };
    }
}

function handleHover (event) {
    event.target.style.backgroundColor = 'blue'
}

function handleClick (event) {
    resizeNum = Number(prompt('Enter a number <= 100, and a new square grid will be created'))
    if (resizeNum > 0 && resizeNum <= 100) {
        resizeGrid(resizeNum);
    } else {
        alert('Please enter a valid number between 1 and 100');
        handleClick()
    }
}


const resizeButton = document.querySelector('button')
resizeButton.addEventListener('click', handleClick)

console.log(resizeNum)

