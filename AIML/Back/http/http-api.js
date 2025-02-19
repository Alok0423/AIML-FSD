const http = require('http');
const axios=require('axios');
const port=3000;
const server=http.createServer(async(req,res)=>{
    console.log('hello from the server');
    res.writeHead(200,{"content-type":"text/html"});
    // const reponse = await fetch("https://dummyjson.com/products");
    // const data=await reponse.json();
    const response = await axios.get("https://api.github.com/search/users",{
        params:{
            q:"location:ghaziabad",
            per_page:10,
        },
    

    });
    const newdata = response.data.items;
    let frontdata=`<html><head></head><body>`
    newdata.forEach((users)=>{
        frontdata+=`<div> <img src="${users.avatar_url}"></div>`
    });
    frontdata+=`</body></html>`
    res.end(frontdata);
});

server.listen(port,()=>{
    console.log(`server is listening on port${port}`);
});