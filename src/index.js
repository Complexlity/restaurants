import homepage from "./homepage"
import gitLogo from "./assets/GitHub-Mark-120px-plus.png"
import './css/pico.min.css'

const content = document.querySelector('#content')
const gitImg = document.querySelector('#git-logo')
const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const contact = document.querySelector('#contact')

gitImg.src =  gitLogo
homepage(content)