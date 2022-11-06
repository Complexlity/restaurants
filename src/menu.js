export default function myPage(content){
const header = document.createElement('h1')
header.textContent = "Hello world"
content.append(header)
}