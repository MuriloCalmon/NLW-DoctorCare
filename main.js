window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  addButtonBackToTopOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function addButtonBackToTopOnScroll() {
  if (scrollY > 1500) {
    buttonBackToTop.classList.add('show')
  } else {
    buttonBackToTop.classList.remove('show')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #abour,
  #about header,
  #about content,
  #about img,
  #contact header,
  #contact img,
  #contact .content ul,
  #contact .content .button,
  #fotter`)
