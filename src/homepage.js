import heroImg from "./assets/pexels-photo-262978.webp"

export default function myPage(content){
const hero = document.createElement('img')
hero.src = heroImg
hero.style.width = "80%"
const heading = document.createElement('h1')
heading.textContent = 'Complexlity\'s Kitchen'
const para = document.createElement('p')
para.textContent = "Hello there. Welcome to my beautiful restaurant. In here we have pizza, lasangne, grand spicy chicken, nuggets, quesadillas, waffles and weetbits. All for your stomach's satisfactions and you taste bud's pleasure"
content.append(heading, hero, para)

}