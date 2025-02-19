const http = require('http');
const fs = require('fs/promises');
const server = http.createServer(async (req,res) =>{

    if(req.url === '/'){
        res.writeHead(200,{
            'content-type': 'application/json'
        })
        const data = await fs.readFile('./aa.json','utf-8')
        res.end(JSON.stringify(JSON.parse(data)))
    }
    else if(req.url === '/home'){
        res.writeHead(200,{
            'content-type':'text/html'
        })
        const data = await fs.readFile('./codepen.html','utf-8');
        res.end(data)
    }
    else{
        res.writeHead(200,{
            'content-type': 'text/html'
        })
        const data = await fs.readFile('./error.html','utf-8')
        res.end(data)
    }





    // res.statusCode = 200;
    // res.setHeader('Content-Type','text/json');
    // res.writeHead(200,{'Content-Type': 'text/plain'});    this is only enough for previous 2 lines

    
    // const data = user.map(u => {
    //     return u.name;
    // });

    // let data = ""
    // user.forEach((u) => {
    //     data += u.name + ' ';
    // })
    // res.end(JSON.stringify(data));
    // const data = await fs.readFile("./aa.json",'utf-8');
    //  res.end(data);
});
port = 3001;
server.listen(port, () => {
    console.log(server is runing on ${port});
});