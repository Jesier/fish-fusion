const { boatInventory } = require("./fishingBoat")
/*if the fishing boat has less than 10 fish do not consider
  if price is above than 7.50 do not consider
  max price price restaurant 5.00 per fish
  should return fish that cost 5.00 or less with an amount of 10 */

const fishForSale = boatInventory()

const mongerInventory = (money) => {
    const concideredFish = []

    for (const fish of fishForSale){
        if (fish.amount >= 10){
            if (fish.price < 7.50 && fish.price < money) { 
            concideredFish.push(fish.species)
            concideredFish.push(10)
            }
        }       
    }           
    return concideredFish
}



module.exports = { mongerInventory }