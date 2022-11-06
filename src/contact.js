export default function myPage(content){
content.innerHTML = ''
const header = document.createElement('h1')
header.textContent = "You can contact me here for more Jobs"
content.append(header)
}