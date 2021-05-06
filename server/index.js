import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
const path = require('path')

const morgan = require('morgan')
require('dotenv').config();

const PORT = 3030;

const todoRoutes = require("./routes/todoRoutes")


const app = express();

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
   })
.then(() => console.log('DB Connected'))
.catch((err) => console.log('DB Connection Error:',err))

app.use(express.json())
app.use(cors())
app.use(morgan("dev"));

/*
mongoose.connect("mongodb://localhost/todolist",connectionOptions)
.then(()=> console.log("connected successfully"))
.catch((error)=> console.error(error))
*/

// db connection




app.use("/todos/",todoRoutes)


//serve static assets in production

if(process.env.NODE_ENV === 'production')
{
   // set static folder 
   app.use(express.static('client/build'))

   app.get('*',(req,res) => {
       res.sendFile(path.resolve(__dirname,'client','build','index.html'))
   })
}
app.listen(PORT, () =>{
    console.log("The server is listening on port " + PORT)
})