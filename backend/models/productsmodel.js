const mongoose = require('mongoose');


const productsSchema = mongoose.Schema({
    category :{
        type :String,
        required : true
    },
    subCategory :{
        type: String,
        required : true
    },
    p_name :{
        type :String,
        required : true
    },
    p_details :{
        type :String,
        required : true
    },
    p_image :{
        type :String,
        required : true,
    },
    p_cost :{
        type :String,
        required : true
    },
    status :{
        type:Boolean,
        required : true
    }
},
{collection :'products',timestamps:true},
);



const Products = mongoose.models.Products || mongoose.model('Products', productsSchema, 'products' )  


export default Products;