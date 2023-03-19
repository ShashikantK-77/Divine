

import Admin_access  from "../../backend/models/adminmodel"
import bcrypt from 'bcrypt';

// import connectDB from './../../backend/db/connect';
require('./../../backend/db/connect');



const handler = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // const username = 'admin';
    // const password = 'admin';
    // res.send(req.body);
    debugger;
    const result = await Admin_access.findOne({ username: username });
    console.log("My Results : ",result)
    debugger;
    if (result) {
        if (await bcrypt.compare(password, result.password)) {
            console.log("Success")
            // req.session['adminid'] = result._id;  // session created 
            // if (req.session['adminid'])
                // res.redirect('/admin/index');
                res.status(200).json({success: "success"})
                // res.redirect('/');
        }
        else{
            // res.redirect('/admin/login');
            res.status(400).json({Failed: "failed"})


        }
    }
    else{
        // res.redirect('/admin/login');
        res.status(400).json({Failed: "failed"})

    }
};

export default handler;