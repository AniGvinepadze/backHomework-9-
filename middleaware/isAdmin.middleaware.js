const isAdminMiddleaware = (req,res,next) =>{
 const headers = req.headers
 if(!headers.role || headers.role !== "admin"){
    return res.status(401).json({message:"create permition denied"})
 }
 next()
}
module.exports = isAdminMiddleaware