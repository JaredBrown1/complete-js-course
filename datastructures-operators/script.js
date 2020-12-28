'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
      console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },

  orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`)
  }
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})

/*
//////////////////////////////////////////////////////////
The spread operator
//////////////////////////////////////////////////////////
*/
const arr = [7,8,9]
const badNewArr = [1,2, arr[0], arr[1], arr[2]]
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr)

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu]

//join 2 arrays (or more)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas'
const letters = [...str, '', 'S']
console.log(letters);
console.log(...str);

// real world example
// const ingredients = [prompt("Let's make pasta! ingredient 1?"),prompt("Let's make pasta! ingredient 2?"),prompt("Let's make pasta! ingredient 3?")]
// console.log(ingredients)

// restaurant.orderPasta(ingredients[0], ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients)

// Objects
const newRestaurant = {foundedIn: 1998,...restaurant, founder: 'Guiseppe'}
console.log(newRestaurant)

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurantCopy.name)
console.log(restaurant.name)

/*
//////////////////////////////////////////////////////////
Destructuring objects
////////////////////////////////////////////////////////
*/

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags)

// // default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters)

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a, b);

// // nested objects
// const { fri: {open: o, close: c} } = openingHours
// console.log(o, c)

/**
///////////////////////////////////////////////////////
Destructuring Arrays!!!!
/////////////////////////////////////////////
 */

// const arr = [2,3,4];
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x, y, z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main]
// console.log(main, secondary)

// //recieve two return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);

// // nested destructuring
// const nested = [2, 4, [5,6]];
// // const [i, , j] = nested;
// // console.log(i, j)
// const [i, , [j, k]] = nested;
// // console.log(i, j, k)

// // default values
// const [p = 1, q = 1, r = 1] = [8]
// console.log(p, q, r)

