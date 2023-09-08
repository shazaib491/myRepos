const express=require("express");

const app = express();

require("dotenv").config()

const blogsRoute=require("./routes/blogs.routes");

app.use(express.json())

// REST API 
// Representation state transfer
//middleware 

// model view controller
// MODEL QUERY DB RELATED
//VIEW UI
//CONTROLLER BUSINNES LOGIC

// routes
// GALI KA PTA

app.use(blogsRoute);

const PORT=process.env.PORT || 3000;

// creating server in express
app.listen(PORT,()=>{
    console.log("server is listening at port no",PORT)
});


