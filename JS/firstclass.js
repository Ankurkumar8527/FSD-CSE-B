// Advance features of JS 
// ES-6 features 
// 1) Arrow function
// 2) let and const 
// 3) Promise 
// 4) Destructuring 
// 5) Speard and rest (...) operator 
// 6) Modules 
// 7) filter map and reduce 
// 8) class 
// 9) template literal(``)
// console.log(a);
// let e=10;
// var a;
// var b=6;
// console.log(a);
// {
//     var c=7;let d=9;
//     console.log(b);
//     console.log(c);
//     console.log(e);
// }
// console.log(c);
// console.log(d);

// Asynchronous Programing 
// register()
function register()
{
    waitfortwoseconds();
    console.log("register enal");
    sendEmail();
}

// sendEmail()
function sendEmail()
{
    waitfortwoseconds();
    console.log("sendemail enal");
    login();
}
// login()
function login()
{
    waitfortwoseconds();
    console.log("login enal");
    getData();
}
// getData()
function getData()
{
    waitfortwoseconds();
    console.log("getdata enal");
    DisplayData();
}
// DisplayData()
function DisplayData()
{
    waitfortwoseconds();
    console.log("DisplayData enal");
}
// wait function
function waitfortwoseconds()
{
    const ms=new Date().getTime()+2000;
    while(new Date().getTime()<ms);
}
waitfortwoseconds();
