// NOT PURE (FUNCTIONAL PROGRAMMING)
// let name1 = 'Sardor';
// function greet(){
// console.log(`Hello ${name1}`)
// };
// greet()
// name1 = 'Sam'
// greet();

// PURE
// function greeting(name2){
// console.log(`Hello ${name2}`)
// };
// greeting('Ali');
// greeting('Usman');

//SIDE EFFECTS
// let thesis = {name: 'Bakr', year: 1998};
// function newName1(newName){
//     thesis.name = newName
//     console.log('Changed!')
// };
// newName1('Ubay')
// console.log(thesis);

//NO SIDE EFFECT
// let thesis1 = {name: 'Bakr', year: 1998};
// function changeName(oldName, newName){
// return {name: newName, year: oldName.year}
// }
// console.log(changeName(thesis1,'Yahya'))

//ITERATION (RECURSION & ITERATION)
// function sum(numbers){
// let total = 0;
// for(let i = 0; i < numbers.length; i++){
//      total += numbers[i];
// }
// return total
// }
// console.log(sum([1,2,3,4]))

//RECURSION - 1
// function sum(numbers){
// if(numbers.length === 1){
//     // base case
//     return numbers[0];
// } else{
//     // recursive case
// return numbers[0] + sum(numbers.slice(1));
// }
// }
// console.log(sum([1,2,3,4]))
//RECURSION - 2
// function recursiveFact(num){
// if(num === 0) {
//     //base case
//     return 1
// } else{
//     //recursive case
//     return num * recursiveFact(num - 1)
// }
// };
// console.log(recursiveFact(5));
//RECURSION-3
// function random(result=0, count=0){
//     if(result === 5){
//         console.log(`Result is ${result}`);
//         console.log(`Counted ${count} time!`);
//         return;
//     }
//     result = Math.floor(Math.random() * 10);
//     count++
//     random(result,count)
//     };
//     random()

// ITERATIVE IS NOT EASY😵
// function fibonacciIterative(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     let prev1 = 1;
//     let prev2 = 0;
//     let current;
//     for (let i = 2; i <= n; i++) {
//       current = prev1 + prev2;
//       prev2 = prev1;
//       prev1 = current;
//     }
//     return current;
//   }
//   console.log(fibonacciIterative(6));

//RECURSIVE IS EASY 😎
// function fibonacciRecursive(num){
//     if (num === 0) return 0;
//     if (num === 1) return 1;
//     return fibonacciRecursive(num - 1) + fibonacciRecursive(num -2);
// }
// console.log(fibonacciRecursive(1034))

//CLOSURE-1
// function makeAdj(adj){
//     return function (noun){
//         return adj + ' ' + noun;
//     }
// };
// let a = makeAdj('myAdj')('myNoun')
// // let b = a('myNoun');
// console.log(a);
//CLOSURE-2
// function add(n) {
// 	return function (num){
// 	return	n + num
// 	};
// };
// console.log(add(10)(90));

//FUNCTION COMPOSITION
// let r = (ending)=> (wow)=> ending + wow;
// let adore = r('i');
// let awa = r(' love ');
// let reply = r('');
// let dad = (x)=> adore(awa(reply(x)));
// console.log(dad('you'));

//MUTATION (DANGEROUS);
// let cities = ['madina','Mekkah', 'Istanbul'];
// cities[0] = 'Sham';
// console.log(cities);

//NO MUTATION 👍🏻
// let oldCity = ['madina','Mekkah', 'Istanbul'];
// let newCity = oldCity.map(city => {
//     if(city === 'madina') return 'MADINA'
//     if(city === 'Mekkah') return 'MEKKAH'
//     return city
// })
// console.log(newCity)

// INTERVIEW TASK CODES!✊
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sum(arr) {
// 	if (arr.length === 1) {
// 		//base case
// 		return 0;
// 	}
// 	if (arr.length > 1) {
// 		//recursive case
// 		return arr[0] + sum(arr.slice(1));
// 	}
// };
// console.log(sum(arr));

// function factorial(num) {
// 	if (num === 1) return 1;
// 	if (num > 1) return num * factorial(num - 1)
// }
// console.log(factorial(5));

// const sum = arr.reduce((acc, val) => acc + val);
// console.log(sum);

//Write a JavaScript function that calculates the total cost of all 'Fruit' items in the cart. Please ensure your function adheres to functional programming principles and avoids changing the original 'cart' array.
// let cart = [
// 	{ name: "Apple", category: "Fruit", quantity: 10, price: 0.5 },
// 	{ name: "Orange", category: "Fruit", quantity: 5, price: 0.8 },
// 	{ name: "Broccoli", category: "Vegetable", quantity: 2, price: 1.5 },
// 	{ name: "Carrot", category: "Vegetable", quantity: 8, price: 0.2 },
// 	{ name: "Chicken", category: "Meat", quantity: 1, price: 10 },
// ];

// let total = cart.reduce((acc, val) => acc + (val.quantity * val.price), 0);
// console.log(total);

