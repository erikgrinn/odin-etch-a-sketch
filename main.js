const gridContainer = document.querySelector('div.grid-container')

const gridRowTemplate = document.createElement('div')
gridRowTemplate.classList.add('grid-row')

const gridItemTemplate = document.createElement('div')
gridItemTemplate.classList.add('grid-item')
gridItemTemplate.setAttribute('data-hover-count', 0)
gridItemTemplate.style.opacity = 1
// gridItemTemplate.setAttribute('data-alpha', 100)

const resizeButton = document.querySelector('button')
resizeButton.addEventListener('click', handleClick)

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
    let hoverCount = event.target.getAttribute('data-hover-count')
    event.target.setAttribute('data-hover-count', ++hoverCount)

    let r = randomBetween(0,255)
    let g = randomBetween(0,255)
    let b = randomBetween(0,255)
    // let a = event.target.getAttribute('data-alpha')

    let rgb = `rgba(${r},${g},${b})`
    event.target.style.backgroundColor = rgb

    let opacity = event.target.style.opacity
    if (opacity != 0) {
        event.target.style.opacity = opacity-0.1
    }
}

function handleClick (event) {
    resizeNum = Number(prompt('Enter a number 1 and 100, and a new square grid will be created.'))
    if (resizeNum > 0 && resizeNum <= 100) {
        resizeGrid(resizeNum);
    } else {
        alert('The number you entered was not between 1 and 100.');
        // handleClick()
    }
}

function randomBetween(min, max) {
    return (min + Math.floor(Math.random() * (max - min + 1)))
}
