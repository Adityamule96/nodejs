const express=require("express");
const app=express();
                        // home Route 
app.get('',(req,res)=>{
  console.log("data sent by browser ==> ",req.query.name)
res.send(`<h1>Hello,this is home page</h1>
   <a href="/about"> GoTo AboutPage</a>
`);
})
                       // about route
app.get('/about',(req,res)=>{
  res.send(`
      <h1>about @ page'</h1>
      <input type="text" placeholder = "User name"/>
      <button>click Me</button>
  
      `);
  })

  app.get('/contact',(req,res)=>{
    res.status(
      {
        "name":"Aditya",
        "phone":"8459200966",
        "address": "hinjewadi", 
      },
      {
        "name":"mule",
        "phone":"8489200966",
        "address": "Ahinjewadi", 
      })

    })

  app.listen(5000);