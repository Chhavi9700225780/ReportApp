const express = require("express");
const router = express.Router();

//import controller
const { createReport } = require("../controllers/createReport.js");
const { getReports } = require("../controllers/getReport.js");
const { updateReport} = require("../controllers/updateReport.js");
const { deleteReport} = require("../controllers/deleteReport.js");
const { contactForm} = require("../controllers/contact.js");

//define APi routes
router.post("/createReport", createReport);
router.post("/contactForm", contactForm);
router.get("/getReports", getReports);

router.put("/updateReport/:id", updateReport);
router.delete("/deleteReport/:id", deleteReport);

module.exports = router;