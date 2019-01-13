function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
const lis = document.querySelectorAll('.ranked-list li')
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
}
}
function deepestChild() {
  let list = document.querySelectorAll('#grand-node div')
  var currentChild = 0
  for (let i = 0; i < list.length; i++) {
    const currentChild = list[i]
  }
  return currentChild
}