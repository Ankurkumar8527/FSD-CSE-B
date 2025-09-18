function register()
{
   return new Promise((resolve,reject)=>
   {
         setTimeout(()=>{
    console.log("register");
    resolve();

   },4000
   )}
   
)}
function sendemail()
{
  return new Promise((resolve,reject)=>
   {
         setTimeout(()=>{
    console.log("register");
    resolve();
    
   },4000
   )}
)
}
function login()
{
  return new Promise((resolve,reject)=>
   {
         setTimeout(()=>{
    console.log("register");
    reject();
    
   },4000
   )}
)
}
function getdata()
{
   return new Promise((resolve,reject)=>
   {
         setTimeout(()=>{
    console.log("register");
    resolve();
    
   },4000
   )}
)
}
function displayData()
{
  return new Promise((resolve,reject)=>
   {
         setTimeout(()=>{
    console.log("register");
    reject();
    
   },4000
   )}
)
}
// function setTimeout()
// {
//     const ms=new Date().getTime()+5000;
//     while(new Date().getTime()<ms)
//     {

//     }
// }
function displayData(){
   setTimeout(()=>{
      console.log("get data end")
   },3000)
}

// callback hell
// register(function()
// {
//    sendemail(function(){
//       login(function()
//       {
//          getdata(function()
//       {
//          displayData();
//       })
//       })
//    })
// })
// register();
// sendemail();
// login();
// getdata();
// displayData();

// Promise
// register().then(sendemail).then(login).then(getdata).then(displayData).catch((err)=>{
//    console.log('Error ')
// });
async function f1() {
try{
await register();
await sendemail();
await login();
await getdata();
await displayData();
}
catch(err)
{
   console.log("error")
}
}