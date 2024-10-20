//import th model
const Report = require("../models/Report");

//define route handler

exports.deleteReport = async (req, res) => {
    try {
        const {id} = req.params;
        await Report.findByIdAndDelete(id);

        res.json({
            success: true,
            message : "Report deleted successfully"
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
          });
    }
}