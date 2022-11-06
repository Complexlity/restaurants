import generator from "./generator"
const content = document.querySelector('#content')
const heading = document.createElement('h1')
const added = document.createElement('p')
heading.textContent = 'Complexlity\'s Kitchen'
generator(added)

content.append(heading)
content.append(added)
/*
<h1> Complexlity's Kitchen</h1>
        <img src="../src/assets/pexels-photo-262978.webp" width="280px" alt="">
        <p>Hello there. Welcome to my beautiful restaurant. In here we have pizza, lasangne, grand spicy chicken, nuggets, quesadillas, waffles and weetbits. All for your stomach's satisfactions and you taste bud's pleasure </p>
*/