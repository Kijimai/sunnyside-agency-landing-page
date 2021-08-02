const navBtn = document.getElementById('nav-btn')
const navHider = document.getElementById('nav-hider')

let width 
window.onresize = readWidth

function readWidth() {
  width = window.innerWidth
  document.documentElement.clientWidth
  document.body.clientWidth
  console.log(width)
  if(width > 768) {
    changeMainImagesDesktop()
    changeGalleryDesktop()
    return
  } else {
    changeMainImagesMobile()
    changeGalleryMobile()
    return
  }
}

navBtn.addEventListener('click', toggleActiveNav)

function toggleActiveNav() {
  navHider.classList.toggle('active')
}

function changeMainImagesDesktop() {
  const allSectionImages = document.querySelectorAll('main .section-image')
  let regexMobile = /mobile/

  allSectionImages.forEach(img => {
    let newSrc = img.src.replace(regexMobile, 'desktop')
    img.src = newSrc
  })
}

function changeMainImagesMobile() {
  const allSectionImages = document.querySelectorAll('main .section-image')
  let regexDesktop = /desktop/

  allSectionImages.forEach(img => {
    let newSrc = img.src.replace(regexDesktop, 'mobile')
    img.src = newSrc
  })
}

function changeGalleryDesktop() {
  const allImages = document.querySelectorAll('.image-grid .gallery-image')
  let regexMobile = /mobile/

  allImages.forEach(img => {
    let newSrc = img.src.replace(regexMobile, 'desktop')
    img.src = newSrc
  })
}

function changeGalleryMobile() {
  const allImages = document.querySelectorAll('.image-grid .gallery-image')
  let regexDesktop = /desktop/

  allImages.forEach(img => {
    let newSrc = img.src.replace(regexDesktop, 'mobile')
    img.src = newSrc
  })
}