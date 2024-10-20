const Contact = require("../models/contact");

exports.contactForm = async (req, res) => {
  
    
  try {
    //extract title and desxcription from reauest body
    const {name,email,message} = req.body;
    //create a new Todo Obj and insert in DB
    const response = await Contact.create({name,email,message});
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
};

