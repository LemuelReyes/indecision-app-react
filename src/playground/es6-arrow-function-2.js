// // arguments object - no longer bound with arrow functions
// const add = (a,b) => {
//     return a + b;
// };
// // this keyword - no longer bound with arrow functions
// const user = {
//     name: 'Lemuel',
//     cities: ['Philippines', 'USA', 'Canada'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// };
// console.log(user.printPlacesLived());


// challenge
// const multiplier = {
//     numbers: [1, 2, 3],
//     multiplyBy: [2],
//     multiplyAll() {
//         return this.numbers.map((number) => number * this.multiplyBy);
//     }
// };

// console.log(multiplier.multiplyAll());