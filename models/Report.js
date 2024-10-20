const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
    {
        type:{
            type:String,
            required:true,
            maxLength:5000,
        },
        description: {
            type:String,
            required:true,
            maxLength:5000,
        },
        location:{
            type:String,
            
        },
        
    }
);

module.exports = mongoose.model("Report", reportSchema);