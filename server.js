// // var a=10;
// // var b=30;
// // console.log(a+b);

// const http=require("http");
// const app =http.createServer((req,res)=>{
// if(req.url==='/post'){
//     res.write("<h1> this is post page</h1>")
//     res.end()

// }
// else if(req.url==='/comment'){
//     // res.write("this is comment page")

//     res.write("<table>")
//     res.write("<tr>")
//     res.write("<td>Fun</td>")
//     res.write("</tr>")
//     res.write("</table>")

//     res.end()

// }
// else{
//     res.write("page not found");
//     res.end()
// }
// })

// app.listen("4000",()=>{
//     try{
//         console.log("our port number is running at port number 4000");
//     }
//     catch(err){
//         console.log("err founded",err);
//     }
// })
// // http:localhost

// Express

// const Express=require("express");
// const app=Express()
// const blogrouter=require('./Router/blogrouter')

// app.use(blogrouter)
// app.get("/post",(req,res)=>{
//     res.send("Dabloo")
// })
// app.listen(4455,()=>{
//     console.log("running at port 4455")
// })


const http=require("http")
const data=[{"What is node1" :"Node is an opensourse crossplatform javascript frontend environment that execute the Javascript code web browser"}]

const app=http.createServer((req,res)=>{
  if(req.url==="/"){
    res.write("Home Page")
    res.end();
  }
   else if(req.url==="/htmldata")
   {
    res.write("<h1>What is Node</h1>");
   
    res.write("<p> Node is an opensourse crossplatform javascript frontend environment that execute the Javascript code web browser</p>")
     res.end()
   }
   else if(req.url==="/jsondata"){
   const data1=JSON.stringify(data)
   res.write(data1);
   res.end()
   }
})
 
  
app.listen(4000,()=>{
    console.log("Running at port 4000")
})


