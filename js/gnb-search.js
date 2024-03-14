const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
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
  gnbSearchHistory.classList.remove('is-active')
}

deleteAllButton.addEventListener('click', deleteAllSearchHisoryItems)
