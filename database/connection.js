const mongoose=require('mongoose')

const connectDB=async()=>{

    try{
 const con=await mongoose.connect("mongodb+srv://blogapp:blogapp07@cluster0.dw8qnc0.mongodb.net/?retryWrites=true&w=majority",{
   useNewUrlParser: true,
   useUnifiedTopology: true,
   
 })
 console.log(`mongo db connected:${con.connection.host}`)
    }
    catch(err){
 console.log(err)
 process.exit(1)
    }
}
module.exports=connectDB