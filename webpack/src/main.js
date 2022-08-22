import {lan} from './lan.js'
import wei from './wei.js'

lan()
wei()

import './App.vue'
import './style/style.css'
import './style/style.less'
import gifsrc from './assets/1.gif'
const img =document.createElement('img')
img.src=gifsrc
document.body.appendChild(img)

import pngSrc from './assets/logo_small.png'
const img2=document.createElement('img')
img2.src=pngSrc
document.body.appendChild(img2)
