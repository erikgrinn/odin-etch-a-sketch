const gridContainer = document.querySelector('div.grid-container')
console.log(gridContainer)
// const gridItem = document.querySelector('.grid-item')
// console.log(gridItem)
for (let i=0; i<256; i++) {
    var gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridItem.textContent = 'empty'
    gridContainer.appendChild(gridItem)
};