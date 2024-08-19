const gridContainer = document.querySelector('div.grid-container')

const gridRowTemplate = document.createElement('div')
gridRowTemplate.classList.add('grid-row')

const gridItemTemplate = document.createElement('div')
gridItemTemplate.classList.add('grid-item')

let resizeNum = 16

resizeGrid(resizeNum)

function resizeGrid (resizeNum) {
    gridContainer.innerHTML = ''
    for (let i=0; i<resizeNum; i++) {
        let gridRow = gridRowTemplate.cloneNode()
        gridContainer.appendChild(gridRow)
        for (let j=0; j<resizeNum; j++) {
            let gridItem = gridItemTemplate.cloneNode()
            gridItem.addEventListener('mouseover', handleHover)
            gridRow.appendChild(gridItem)
        };
    }
}

function handleHover (event) {
    let r = randomBetween(0,255)
    let g = randomBetween(0,255)
    let b = randomBetween(0,255)
    let rgb = `rgb(${r},${g},${b})`

    event.target.style.backgroundColor = rgb
}

function handleClick (event) {
    resizeNum = Number(prompt('Enter a number 1 and 64, and a new square grid will be created.'))
    if (resizeNum > 0 && resizeNum <= 100) {
        resizeGrid(resizeNum);
    } else {
        alert('The number you entered was not between 1 and 64.');
        // handleClick()
    }
}


const resizeButton = document.querySelector('button')
resizeButton.addEventListener('click', handleClick)


function randomBetween(min, max) {
    return (min + Math.floor(Math.random() * (max - min + 1)))
}

// const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
// const r = randomBetween(0, 255);
// const g = randomBetween(0, 255);
// const b = randomBetween(0, 255);
// const rgb = `rgb(${r},${g},${b})`;

