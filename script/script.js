const navbar = document.querySelector('.navbar')
const mobileNavbar = document.querySelector('.navbar__mobile')
const button = document.querySelector('.burguer')

button.addEventListener('click', function(){
    mobileNavbar.classList.toggle('active')
})

window.addEventListener('scroll', function(){
    if (this.window.pageXOffset > 0) return navbar.classList.add('active')
        return navbar.classList.remove('active')
})
