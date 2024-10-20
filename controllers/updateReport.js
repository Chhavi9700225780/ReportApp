//import th model
const Report = require("../models/Report");

//define route handler

exports.updateReport = async(req,res) => {
    try {
        const {id} = req.params;
        const {type,description,location} = req.body;

        const report = await Report.findByIdAndUpdate(
            {
                _id : id,
            },
            {
                type,
                description,
               location,
            }
        )
        res.status(200).json({
            success: true,
            data : report,
            message : "Update Successfully"
        })
    }
    catch(err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        })
    }
}