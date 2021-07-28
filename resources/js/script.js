const navBtn = document.getElementById('nav-btn')
const navLinksContainer = document.getElementById('nav-hider')

navBtn.addEventListener('click', displayNav)

function displayNav() {
  navLinksContainer.classList.toggle('active')
}