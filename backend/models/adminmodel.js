const mongoose = require('mongoose');


const loginSchema = mongoose.Schema({
    username :{
        type :String,
        required : true
    },
    password :{
        type: String,
        required : true
    }
},
{collection :'admin_access',timestamps:true},
);



// const Admin_access = mongoose.model('Admin_access',loginSchema,'admin_access');
const Admin_access = mongoose.models.Admin_access || mongoose.model('Admin_access', loginSchema, 'admin_access' )  


export default Admin_access;