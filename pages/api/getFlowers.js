import Products  from "../../backend/models/productsmodel"
import bcrypt from 'bcrypt';

// import connectDB from './../../backend/db/connect';
require('./../../backend/db/connect');


const handler = async (req, res) => {
    const result = await Products.find({status : {$eq :1 }});
    if (result){
    //    res.status(400).json({Failed: "failed"})
    //    res.status(200).json({success:"success",data:result})
    res.send(result);

    }
        
};

export default handler;