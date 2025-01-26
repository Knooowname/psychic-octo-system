let username = document.querySelector(`input[name='username']`).value
let email = document.querySelector(`input[name='email']`).value
let checkbox = document.querySelector(`input[name='checkbox']`).value


window.addEventListener('scroll', () => {
  const header = document.querySelector('.header')
  const headerMargin = document.querySelector('.header-margin')

  if (window.scrollY > 0) {
    header.classList.add('fixed')
    headerMargin.style.height = `${header.offsetHeight}px`
  } else {
    header.classList.remove('fixed')
    headerMargin.style.height = '0'
  }
})
