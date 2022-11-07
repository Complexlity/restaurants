import './css/pico.min.css'
import './css/custom.css'
import gitLogo from "./assets/GitHub-Mark-120px-plus.png"
import homepage from "./homepage"
import menu from './menu'
import about from './about'


const content = document.querySelector('#content')
homepage(content)
getMenuMiniBtn()
let currentPage = 'home'
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
            getMenuMiniBtn()
            document.body.style.overflow = 'auto'
            currentPage = 'home'
            break
        case 'menu':
            if(currentPage == 'menu') return
            menu(content)
            document.body.style.overflow = 'auto'
            currentPage = 'menu'
            break
        case 'about':
            if(currentPage == 'about') return
            about(content)
            document.body.style.overflow = 'hidden'
            currentPage = 'about'
            break

    }
}


function getMenuMiniBtn(){
    let spanMenu = document.querySelector('.go-to-menu')
    spanMenu.addEventListener('click', loadPage)
}

function goToGithub(){
    let github = document.querySelector('.github')

}