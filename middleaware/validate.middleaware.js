const validateMidlleware = (req, res, next) => {
  const required = ["firstName", "lastName", "age"];
  const filter = required.filter((e) => !req.body[e]);

  if(filter.length>0){
    res.status(400).json({
        message: " Missing required fields",
        filter
    });
   
  }
  next()
};


module.exports = validateMidlleware