import heroImg from "./assets/pexels-photo-262978.webp"
import menu from './menu'

export function spanMenu(content){
    let spanMenu = document.querySelector('.go-to-menu')
    spanMenu.addEventListener('click', () => {
        content.innerHTML = ''    
        menu(content)
    })
}

export default function myPage(content){
    content.innerHTML = ''
    const hero = document.createElement('img')
    hero.src = heroImg
    hero.style.width = "80%"
    const heading = document.createElement('h1')
    heading.textContent = 'Complexlity\'s Kitchen'
    const para = document.createElement('p')
    const spanMenu = document.createElement('span')
    spanMenu.classList.add('go-to-menu')
    spanMenu.textContent = 'menu'
para.innerHTML = `Hello there. Welcome to my beautiful restaurant. Check out our `
para.append(spanMenu)
para.innerHTML += ' for the delicious dishes we have'
content.append(heading, hero, para)

}
