document.addEventListener('DOMContentLoaded', () => {
  createGrid()
})


let newGridButton = document.querySelector(".new-grid")
newGridButton.addEventListener('click', () => {
  let size = prompt("Please enter the size of your gride (e.g. 16, 34, 66).")
  if (size < 4 || size > 100 ) {
    size = prompt("Please enter a number greater then 3 and less then 101")
  }
  createGrid(size)
})

function changeBackgroundOfSquare(id) {
  let squares = document.querySelectorAll(".square")
  let squareToChange = squares[id]
  squareToChange.classList.toggle("active")
}

function createGrid(size = 16) {
  let mainDiv = document.querySelector(".container");
  mainDiv.innerHTML = ''

  for (let i = 0; i < size*size; i++) {
    let square = document.createElement("button")
    square.classList.add("square")
    square.id = i
    square.addEventListener('click', (e) => { changeBackgroundOfSquare(e.target.id)})
    mainDiv.appendChild(square) 
  }

  document.documentElement.style.setProperty('--square-size', `${900 / size}px`)
}