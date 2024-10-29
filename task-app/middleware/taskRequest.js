
const {isPresent, isBoolean, isDate} = require("./validator")

module.exports = (req, res, next) => {
  
  try {
    isPresent("title", req.body)
    isPresent("description", req.body)
    isPresent("date_debut", req.body)
    isPresent("date_fin", req.body)
    isPresent("done", req.body)
    
    isBoolean("done", req.body)

    isDate("date_debut", req.body)
    isDate("date_fin", req.body)
  } catch (error) {
    return res.status(403).json({error : error.message})
  }
  next()
}