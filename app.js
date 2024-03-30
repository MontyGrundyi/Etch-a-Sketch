const container = document.querySelector("#container");

function createSquares(numSquares) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const squareSize = Math.min(viewportWidth, viewportHeight) / numSquares;

  for (let i = 0; i < numSquares * numSquares; i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "etch");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
      const randomColor = getRandomColor();
      square.style.backgroundColor = randomColor;
    });
    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "";
    });
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const squaresBtn = document.querySelector("#squaresbtn");
squaresBtn.addEventListener("click", () => {
  let selectedNumSquares = parseInt(
    prompt("Enter the number of squares per side (1 to 100):")
  );
  if (
    !isNaN(selectedNumSquares) &&
    selectedNumSquares >= 1 &&
    selectedNumSquares <= 100
  ) {
    container.innerHTML = "";
    createSquares(selectedNumSquares);
  } else {
    alert("Please enter a valid number of squares per side (1 to 100).");
  }
});

createSquares(16);
