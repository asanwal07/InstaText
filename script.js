textel = document.getElementById('text')
speedel = document.getElementById('speed')
const text = 'Nainital : A beautiful Place to visit ,stay and Party with friends.'
let idx = 1
let speed = 300 / speedel.value


writetext()


function writetext() {
      textel.innerText = text.slice(0, idx)

      idx++

      if (idx > text.length) {
            idx = text.length
      }
      setTimeout(writetext, speed);
}


speedel.addEventListener('input', (e) => speed = 300 / e.target.value)