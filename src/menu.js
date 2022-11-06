export default function myPage(content){
content.innerHTML = ''
const header = document.createElement('h1')
header.textContent = "Welcome To Complex Menu"
content.append(header)
}