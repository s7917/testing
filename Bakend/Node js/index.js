const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("index.html" , "utf-8");
// fs.writeFileSync("shubrfnod.txt", "hello shubahm",(()=>{
//     console.log("file created")
// }))
// console.log("hnn vhai")
// console.log(os.totalmem());
// create your own server
  const Port = 2000;
  const hostname = "localhost"
const server = http.createServer((req , res )=>{
 if(req.url =="/"){
   return  res.end(home);
 }
 if(req.url =="/about"){
   return  res.end("<h1>About</h1>");
 }

 if(req.url =="/contact"){
    return res.end("<h1>Contact</h1>");
 }
 else{
   return  res.end("<h1>404 error page</h1>");
 }
});


server.listen(Port , hostname , ()=>{
    console.log("server is running on http://localhost:2000)");
})