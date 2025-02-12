const http = require('http');
const fs=require('fs/promises')
const server = http.createServer(async(req,res)=>
{
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.write("<h1></h1>");
    const data = await fs.readFile("./home.html","utf-8");
    res.end(data);

});
port = 3000;
server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
});