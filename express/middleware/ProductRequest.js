

module.exports = (req, res, next) => {

  const body = req.body

  if ( body.name != undefined && body.price != undefined && body.quantity != undefined && body.description != undefined) {
    next()
  }
  res.status(403).json({message : "Fields : name, price, quantity, description are required"})
}
