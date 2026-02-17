const fs = require('fs')
const fs1 = require('fs').promises

function writeData()
{
    let statusmsg="";
    try{
        let s=fs.writeFileSync("studentdata.txt","Welcome to Node FS Module")
        // console.log("Data is written successfully",);
        statusmsg=s;
        statusmsg="Data is written successfully";
    }
    catch(e)
    {
            // console.log("Error is : ",e);
            statusmsg="Error is  : "+e;
    }
    return statusmsg;
}

function readData()
{
    let statusmsg="";
    try{
        const fdata=fs.readFileSync('studentdata.txt',{encoding:'utf-8'})
        statusmsg=fdata
    }
    catch(e)
    {
        statusmsg=e;
    }
    return statusmsg;
}
function deleteData(){
    try{
        fs.unlinkSync('stdentdata.txt')
    }
    catch(e)
    {

    }
}

const obj={readData,writeData,deleteData};
module.exports=obj;