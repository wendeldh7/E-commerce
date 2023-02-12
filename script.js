const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

/* if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
} */

bar && bar.addEventListener('click', () => nav.classList.add('active'))

/* if (close) {
  close.addEventListener('click', () => nav.classList.remove('active'))
} */

close && close.addEventListener('click', () => nav.classList.remove('active'))

window.addEventListener('scroll', function () {
  backToTop()
})

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
