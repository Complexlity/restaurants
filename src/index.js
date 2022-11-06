import './css/pico.min.css'
import gitLogo from "./assets/GitHub-Mark-120px-plus.png"
import homepage from "./homepage"
import menu from './menu'
import contact from './contact'

const content = document.querySelector('#content')
homepage(content)
const gitImg = document.querySelector('#git-logo')
const navs = document.querySelectorAll('.navigation')
gitImg.src =  gitLogo

navs.forEach(nav => nav.addEventListener('click', loadPage))

function loadPage(){
    let clicked = this.textContent.toLowerCase()
    content.innerHTML = ''
    switch (clicked){
        case 'home':
            homepage(content)
            break
        case 'menu':
            menu(content)
            break
        case 'contact':
            contact(content)
            break

    }
}