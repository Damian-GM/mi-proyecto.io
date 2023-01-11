const hambu = document.getElementById('hambu')
const navMobile = document.getElementById('nav-mobile')

hambu.addEventListener('click', () => {
    hambu.classList.toggle('is-active')
    navMobile.classList.toggle('is-active')
})