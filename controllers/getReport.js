//import th model
const Report = require("../models/Report");

//define route handler

exports.getReports = async (req, res) => {
  try {
    // fetch all todo items from database
    const reports = await Report.find({});

    // Response
    
    res.status(200).json({
      success: true,
      data: reports,
      message: "Entire Todo Data is Fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

