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
