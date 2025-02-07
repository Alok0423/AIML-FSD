const read=()=>{
    const fs=require("fs");
    fs.readFile("./data.txt","utf-8",(error,data)=>{
        if (error){
            console.error("error reading file:",error);
        }
        else{
            console.log("data from file:",data);
        }
    });
}
read();
console.log("complete me first")