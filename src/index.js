//index.js
const express= require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/operarios")

const app = express();
const port = process.env.PORT || 9000;


//middleware
app.use(express.json())
app.use('/api', userRoutes )


//routes
app.get('/', (req, res)=>{
    res.send("welcome")
});



//mongo db connection 
mongoose.connect(process.env.mongodb)
.then(()=>console.log("conectado a mongo db atlas"))
.catch((error)=> console.log("error"))
app.listen(port, ()=> console.log("server listening on port", port));

