const container = document.getElementById("container")

const colors = [
  "#f7797f",
  "#077c6d",
  "#43ccbe",
  "#89f27b",
  "#1caf5c",
  "#e03398",
  "#e8654e",
  "#ead238",
  "#d1ccff",
]

const N = 500

for (let i = 0; i < N; i++) {
  const square = document.createElement("div")
  square.classList.add("square")

  square.addEventListener("mouseover", () => setColor(square))
  square.addEventListener("mouseout", () => removeColor(square))
  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = "#1f1f1f"
  element.style.boxShadow = "0 0 2px #000"
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
