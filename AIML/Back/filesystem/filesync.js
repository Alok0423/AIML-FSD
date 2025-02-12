const fs= require('fs/promises');
const read = async ()=>{
    try{
        const data = await fs.readFile("./data.txt","utf-8");
    console.log(data)
    } catch(error) {
        console.log(error.message)
    }
}
const write = async ()=>{
    try{
        await fs.readFile("./data2.txt","this is my new file","utf-8");
    } catch(error) {
        console.log(error.message)
    }
}
read();
write();