export default function myPage(content){
content.innerHTML = ''
const header = document.createElement('h1')
header.textContent = "Welcome To Complex Menu"
content.append(header)
content.innerHTML += `
<table role="grid">
<caption>Our Exotic Dishes</caption>
<thead>
    <tr>
        <th>Dish Name</th>
        <th>About</th>
        <th>Taste (1-10)</th>
        <th>Rating</th>
        <th>Cost</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th>Pizza</th>
        <td>Made with cheese</td>
        <td>5</td>
        <td>9.9</td>
        <td>$5</td>
    </tr>
    <tr>
        <th>Grand spicy chicken</th>
        <td>Made with chicken</td>
        <td>8</td>
        <td>8.7</td>
        <td>$2</td>
    </tr>
    <tr>
        <th>Nuggets</th>
        <td>Made of meat</td>
        <td>8</td>
        <td>9.2</td>
        <td>$4</td>
    </tr>
    <tr>
        <th>Lasagne</th>
        <td>Made of meat and cheese</td>
        <td>7</td>
        <td>7.4</td>
        <td>$6</td>
    </tr>
    <tr>
        <th>Waffles</th>
        <td>Made of Egg</td>
        <td>6</td>
        <td>8.0</td>
        <td>$8</td>
    </tr>
    <tr>
        <th>Beetroot</th>
        <td>Also called <span class="beta">Beta Vulgaris</span></td>
        <td>8.4</td>
        <td>9.3</td>
        <td>$8.5</td>
    </tr>
</tbody>
</table>
`
}