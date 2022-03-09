// function sum(a: number, b:number): number{
//     return a+b;
// }
// const a:number = 10;
// const b:number = 20;
// const result = sum(a,b);
// console.log(result);


// let number1: number = 5;
// let number2: number = 2.8;
// let phrase: string = 'Result is';
// let permit: boolean = true;

// const result = number1 + number2;
// if(permit){
//     console.log(phrase + result);
    
// }else{
//     console.log('Not show result');
    
// }

type Person = {
    id: number;
    name: string;
    age: number;
    status?: boolean
}
const person: Person ={
    id:1,
    name: "Anh",
    age:20
}
const person2: Person[] = [
    {id:1, name: "Vân", age:20, status:true},
    {id:2, name: "ABC", age:20, status:false},
]
console.log(person.name);
