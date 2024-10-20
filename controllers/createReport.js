//import th model
const Report = require("../models/Report");

//define route handler

exports.createReport = async(req,res) => {
    try {
            //extract title and desxcription from reauest body
            const {type,description,location} = req.body;
            //create a new Todo Obj and insert in DB
            const response = await Report.create({type,description,location});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}