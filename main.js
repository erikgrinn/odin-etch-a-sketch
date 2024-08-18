const gridContainer = document.querySelector('div.grid-container')

const gridColTemplate = document.createElement('div')
gridColTemplate.classList.add('grid-col')

const gridItemTemplate = document.createElement('div')
gridItemTemplate.classList.add('grid-item')

let count = 0

for (let i=0; i<16; i++) {
    let gridCol = gridColTemplate.cloneNode()
    gridContainer.appendChild(gridCol)
    for (let j=0; j<16; j++) {
        count++
        let gridItem = gridItemTemplate.cloneNode()
        gridItem.textContent = count
        gridItem.addEventListener('mouseover', handleHover)
        gridCol.appendChild(gridItem)
    };
}

function handleHover (event) {
    event.target.style.backgroundColor = 'blue'
}
