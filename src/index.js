import './css/pico.min.css'
import './css/custom.css'
import gitLogo from "./assets/GitHub-Mark-120px-plus.png"
import homepage, {spanMenu} from "./homepage"
import menu from './menu'
import about from './about'

const content = document.querySelector('#content')
homepage(content)
let currentPage = 'home'
spanMenu(content)
const gitImg = document.querySelector('#git-logo')
const navs = document.querySelectorAll('.navigation')
gitImg.src =  gitLogo

navs.forEach(nav => nav.addEventListener('click', loadPage))

function loadPage(){
    let clicked = this.textContent.toLowerCase()
    switch (clicked){
        case 'home':
            if(currentPage == 'home') return
            homepage(content)
            spanMenu(content)
            currentPage = 'home'
            break
        case 'menu':
            if(currentPage == 'menu') return
            menu(content)
            currentPage = 'menu'
            break
        case 'about':
            if(currentPage == 'about') return
            about(content)
            currentPage = 'about'
            break

    }
}