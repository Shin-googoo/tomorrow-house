const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

const deletButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button')

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
  }
}

function openGnbSearchHistory() {
  // 체크 -> gnbSearchHistoryList 안에 li가 몇개인지
  // li가 0개 -> 실행 x
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
  gnbSearchHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)

function deleteAllSearchHisoryItems() {
  //gnbSearchHistoryList 안에 있는 모든 li를 삭제!
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

deleteAllButton.addEventListener('click', deleteAllSearchHisoryItems)

function deleteSearchHistoryItem(e) {
  e.stopPropagation() //이벤트의 전파를 막아준다.
  //li 삭제
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)

  //각각의 개별 리스트를 삭제 했을때 ol 창이 닫힘
  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

deletButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem)
})
