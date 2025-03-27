
const dotenv=require('dotenv')
dotenv.config();
const express =require('express')
const app=express()
const cors=require('cors')

const PORT=process.env.PORT || 8080;




app.use(cors());


//routes
app.get('/',(req,res)=>{
    res.send(`Hello World`)
})

app.listen(PORT,()=>{
    console.log(`Server is listening on the ${PORT}`)
})
