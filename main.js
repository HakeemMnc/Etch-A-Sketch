const grid = document.querySelector(".grid-container");
const color = document.querySelector("#color-picker");
const clear = document.querySelector("#clear-button");
const size = document.getElementById("size-value");
const sizeInput = document.getElementById("size-input");

function updateTextInput(val) {
  const size = document.getElementById("size-value");
  size.textContent = `${val}`;
}
function makeGrid(value = 16) {
  const number = value;

  const sizeCells = 700 / number;

  for (let i = 0; i < number; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < number; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.minHeight = `${sizeCells}px`;
      cell.style.minWidth = `${sizeCells}px`;
      row.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = color.value;
      });
    }
    grid.appendChild(row);
  }
}

function clearGrid() {}

clear.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  console.log(cells);
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

function updateTextInput(val) {
  size.textContent = `${val}`;
  grid.replaceChildren();

  makeGrid(val);
}

makeGrid();
