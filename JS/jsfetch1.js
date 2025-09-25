const url=("https://dummyjson.com/users?limit=2");
// const pr=fetch(url);
// pr.then((res)=>{
//     return res.json();
// })
// // bcoz users is an error
// .then((data)=>
// {   data.users.forEach((da)=>
// {
//     console.log("name=",da.firstName);
//     console.log("name=",da.email);
//     console.log("name=",da.ip);
//     console.log("name=",da.macAddress);
// })
   
// })
// .catch((err)=>
// {
//     console.log("Error: ",err.message);
// })

const f1=async()=>
{
   try{
    const res=await fetch(url);
    const jsondata=await res.json();
    jsondata.users.forEach((data)=>
    {
        console.log("name=",data.firstName);
        console.log("Email=",data.email);
        console.log("IP=",data.ip);
        console.log("Mac=",data.macAddress);
        console.log("##########");
    })
   }
   catch(err)
   {
    console.log("error= ",err.message);
   }
}
f1();