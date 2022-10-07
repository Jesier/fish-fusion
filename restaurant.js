const { mongerInventory } = require("./fishMonger.js")
const { boatInventory } = require("./fishingBoat")

const caughtFish = boatInventory() 
const fishOnMenu = mongerInventory(5.00)



const fishMenu = (menu) => {
const fishHtml = `<h1>Menu</h1>\n<article class="menu">\n\t<h2>${menu}</h2>\n\t<section class="${menu}"> Salmon Soup</section>\n\t<section class="${menu}"> Salmon Sandwich</section>\n\t<section class="${menu}"> Grilled Salmon</section>\n</article>`
return fishHtml
}
const menu = fishMenu("salmon")
//console.log(menu)

module.exports = { fishMenu }