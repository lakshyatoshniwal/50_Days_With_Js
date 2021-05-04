const list = document.querySelectorAll("nav ul li")
const contents = document.querySelectorAll(".content")

list.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents()
    hideAllItems()
    item.classList.add("active")
    contents[idx].classList.add("show")
  })
})

function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"))
}

function hideAllItems() {
  list.forEach((item) => item.classList.remove("active"))
}
