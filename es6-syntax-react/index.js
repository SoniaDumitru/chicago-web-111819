// Spread operator
// denoted by ...
// can be used to copy, prepend, append, double, and more

// Spread operator and arrays
const array = [1, 2, 3, 4, 5]
const b = array.slice() // makes a copy of array

const c = [...array] // same thing as b! but shorter!


// Spread operator and objects
const obj = {flavor: "Rhubarb", texture: "Spongy"}
const oldway = Object.assign({}, obj)
const objA = {...obj}

// to test: what if we add a key/value? what if the key is the same as in the original object? When does order matter, if at all?

// what if we tried to merge two objects together?


// Destructuring is { cool, really: { you're, gonna, love, it } }
const info = {
  name: "Duke",
  age: 34,
  weight: 195,
  backpack: {
    pockets: 14,
    packWeight: 25,
    condition: "needs replacing",
    favContents: "spare headphones"
  }
}

// const name = info.name
//
// const age = info.age

const { name, age, backpack: { packWeight, favContents }, weight } = info
// const { weight } = info.backpack

console.log(name)

const greeting = `I am a ${age} year old person named ${name} I am allegedly ${weight} pounds. My backpack weighs ${packWeight} pounds most days. My favorite thing in there is ${favContents}.`





// Restructuring is kinda like destructuring but backwards.
const band = "Spinal tap"
const totalSales = 194
const maxVolume = "this one goes to eleven"

const origStyle = {band: band, totalSales: totalSales, maxVolume: maxVolume }
const restructured = { band, totalSales, maxVolume }


// Technical value of de/restructuring: LOW
// Aesthetic/code cleanliness value: HIGH

// req.body = {
//   name,
//   email,
//   password
// }

// DYNAMIC KEYS - behold the power of the bracket operator.


function dynamicSetKeys(obj, key, val) {
  obj[key] = val
  return obj
}

const pizza = {}

dynamicSetKeys(pizza, "topping", "artichoke hearts")
dynamicSetKeys(pizza, "sauce", "pesto")
dynamicSetKeys(pizza, "size", "personal")
