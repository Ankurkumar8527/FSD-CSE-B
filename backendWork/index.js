const http = require('http');

const PORT = 4005;
const fetchServerData = require('./getdata');
const server = http.createServer(async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin','https://localhost:5173');
    res.setHeader('Access-Control-Allow-Origin','GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin','Content-type');

    if (req.url === '/msg' && req.method=='GET') {
        res.setHeader('Content-Type','text/html');
        res.end('<h2 style=color:red>Welcome</h2>');
    }
    if(req.url=="/data" && req.method=="POST") {
        const result = await fetchServerData();
        console.log("result", result);
       res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg: result}));
    }
});

server.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    // Fetch and log data on server start
    await fetchServerData();
});