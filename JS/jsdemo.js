// ES-6 Module system 
import {add,multiple}from "../JS/jsdemo1.js"
console.log("sum=",add(54,45));
console.log("multiple=",multiple(5,6));

const num=[1,2,3,4,5,6,7,8,9];
const even=num.filter((n)=>(n%2==0))
            .map((n)=>(n*n))
            .reduce((n,sum)=>(n+sum),0)

console.log(even);