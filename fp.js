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

//CLOSURE
// function makeAdj(adj){
//     return function (noun){
//         return adj + ' ' + noun;
//     }
// };
// let a = makeAdj('myAdj');
// let b = a('myNoun');
// console.log(b);

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