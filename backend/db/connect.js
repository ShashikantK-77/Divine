// // const mongoose = require('mongoose');
// import mongoose from 'mongoose';


// const connectDB = async (handler) => {
//     // if (mongoose.connect[0].readyState) {
//     //     return handler(req,res);
//     // }
//     // await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
//    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => console.log("Devine Database connection successfull..."))
//         .then((err) => console.log(err));
//     return handler(req,res);

// }

// export default connectDB;


const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/divine_costumes",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("Database connection successfull..."))
.then((err)=>console.log(err));


