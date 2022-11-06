export default function myPage(content){
content.innerHTML = ''
const header = document.createElement('h1')
header.textContent = "Welcome To Complex Menu"
content.append(header)
content.innerHTML += `
<table>
<caption>Our Exotic Dishes</caption>
<thead>
    <tr>
        <th>Dish Name</th>
        <th>About</th>
        <th>Taste</th>
        <th>Found</th>
        <th>Rating</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th>Pizza</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>Grand spicy chicken</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>Nuggets</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>Lasagne</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>Waffles</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>Beetroot</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</tbody>
</table>
`
}