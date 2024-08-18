const gridContainer = document.querySelector('div.grid-container')

const gridItemTemplate = document.createElement('div')
gridItemTemplate.classList.add('grid-item')
gridItemTemplate.textContent = 'i'

for (let i=0; i<256; i++) {
    let gridItem = gridItemTemplate.cloneNode(true)
    gridContainer.appendChild(gridItem)
};