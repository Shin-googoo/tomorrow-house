const orderCta = document.querySelector('.order-cta')
const [orderCtaBuyButton, orderCtaBookmarkButton] = orderCta.childern
//const orderCtaBuyButton = orderCta.childern[0]
//const orderCtaBookmarkButton = orderCta.childern[1]

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

orderCtaBuyButton.addEventListener('click', function () {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
})

orderModalOverlay.addEventListener('click', function () {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
})
