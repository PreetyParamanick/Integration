const mongoose=require("mongoose"); 
const mongoURI="mongodb+srv://snigdho386:cazzit'sIT@cluster0.yt1dwsv.mongodb.net/utility?retryWrites=true&w=majority"
//let data; 
const mongoDB=async(val)=>{
    await mongoose.set('strictQuery',true)
    await mongoose.connect(mongoURI,async(err,result)=>{
    if(err) 
        console.log('----',err) 
    else{
        console.log("Connected to Database");
    }
})
};
module.exports=mongoDB;
