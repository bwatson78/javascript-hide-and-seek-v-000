function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString()
  }
}

function deepestChild() {
  var ch = document.getElementById('grand-node')
  var next = ch.children[0]
  while (next) {
    ch = next
    next = ch.children[0]
  }
  return ch
}
