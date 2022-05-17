import mongoose from "mongoose";


const connectDB= (url) =>{
    console.log('db connected');
    return mongoose.connect(url)
}

export default connectDB