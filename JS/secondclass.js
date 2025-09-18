function register()
{
    waitforfiveseconds();
    console.log("register")
}
function sendemail()
{
    waitforfiveseconds();
    console.log("enter mail");
}
function login()
{
    waitforfiveseconds();
    console.log("click login");
}
function getdata()
{
    waitforfiveseconds();
    console.log("fetch data");
}
function displayData()
{
    waitforfiveseconds();
    console.log("display data");
}
function waitforfiveseconds()
{
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms)
    {

    }
}
register();
sendemail();
login();
getdata();
displayData();