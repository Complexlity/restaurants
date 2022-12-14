import heroImg from "./assets/pexels-photo-262978.webp"
import menu from './menu'

export default function myPage(content){
    content.innerHTML = ''
    const grided = document.createElement('div')
    grided.classList.add('grid-div')
    const hero = document.createElement('img')
    hero.src = heroImg
    hero.classList.add('hero')
    const heading = document.createElement('h1')
    heading.textContent = 'Complexlity\'s Kitchen'
    const para = document.createElement('p')
    const spanMenu = document.createElement('span')
    spanMenu.classList.add('go-to-menu')
    spanMenu.textContent = 'menu'
para.innerHTML = `Hello there. Welcome to my beautiful restaurant. Check out our `
para.append(spanMenu)
para.innerHTML += ' for the delicious dishes we have'
grided.append(hero, para)
content.append(heading, grided)

}
