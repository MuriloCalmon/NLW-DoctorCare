window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  addButtonBackToTopOnScroll()
  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
  activeMenuAtCurrentSection(contact)
}

//verifica se a seção passou da linha
function activeMenuAtCurrentSection(section) {
  //Linha alvo
  const tagetLine = scrollY + innerHeight / 2

  //Topo da seção
  const sectionTop = section.offsetTop

  //ALtura da seção
  const sectionHeight = section.offsetHeight

  //O topo da seção chegou ou passou da linha alvo
  const sectionTopReachOrPassedTargetLine = tagetLine >= sectionTop

  //A seção termina onde
  const sectionEndAt = sectionHeight + sectionTop

  //O final da seção passou da linha alvo
  const sectionEndPasserTargerLine = sectionEndAt <= tagetLine

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPasserTargerLine

  const selectId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${selectId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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
  if (scrollY > 400) {
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
