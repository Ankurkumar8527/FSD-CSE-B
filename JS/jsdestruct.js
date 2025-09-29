const num=[10,30,40,50];
// Array destructuring 
// const a = num[0];
// const b = num[1];
// const c = num[0];
// const d = num[1];
// const e = num[0];

// const [a,b,c,d,e]=num;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// Object destructring 

const [a,b,c,d,e]=num;
// const obj={name:"abc",id:2,email:'abe@gmail.com'}
// const {name, id,email}=obj;
// console.log(name);
// console.log(id);
// console.log(email);

// const [a,b,c,d,e]=num;
const obj={name:"abc",id:2,email:'abe@gmail.com'}
const {name:newname, id,email}=obj;
console.log(newname);
console.log(id);
console.log(email);