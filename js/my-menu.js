const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMyMenu)

function closeMyMenuOnClickingOutside(e) {
  // 1. 내가 클릭한 요소가 무엇인지? -> e.target
  // 2. myMenu가 요소를 포함하고 있는지를 알 수 있는 방법 -> contains!
  // -> myMenu가 e.target을 포함하고 있지 않은 경우 -> myMenu에 is-active 제거
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}

window.addEventListener('click', closeMyMenuOnClickingOutside)
