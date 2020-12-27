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
};



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

