

const mongoose=require('mongoose')

const MONGO_URL='mongodb+srv://20247:Srijan%4026@cluster0.x9s3cyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDb=async()=>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log('Mongodb is connected')

    }
    catch(error){
        console.log('The error is',error)
    }
}
module.exports=connectDb