const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programing!'

const textArr = [
  'All pair Shortest Path',
  'Assembly line Scheduling',
  'Matrix Chain Multiplication',
  'Longest Common Subsequence',
  '0/1 knapsack',
]

let idx = 1
let x = speedEl.value
let speed = 300 / x
let i = 0

writeText()

function writeText() {
  textEl.innerText = textArr[i].slice(0, idx)
  idx++
  if (idx > textArr[i].length) {
    idx = 1
    i++
    if (i == textArr.length) {
      i = 0
    }
  }

  setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
  if (e.target.value > 5) {
    x = 5
  } else if (e.target.value < 1) {
    x = 1
  } else {
    x = e.target.value
  }
  speed = 300 / x
})
