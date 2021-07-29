const navBtn = document.getElementById('nav-btn')
const navHider = document.getElementById('nav-hider')

navBtn.addEventListener('click', toggleActiveNav)

function toggleActiveNav() {
  navHider.classList.toggle('active')
}