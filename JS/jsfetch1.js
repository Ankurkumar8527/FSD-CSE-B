const url=("https://dummyjson.com/users?limit=2");
const pr=fetch(url);
pr.then((res)=>{
    return res.json();
})
// bcoz users is an error
.then((data)=>
{   data.users.forEach((da)=>
{
     console.log("name=",da.firstName);
    console.log("name=",da.email);
    console.log("name=",da.ip);
    console.log("name=",da.macAddress);
})
   
})
.catch((err)=>
{
    console.log("Error: ",err.message);
})