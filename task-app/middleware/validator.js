
const isPresent = (name, body) => {
  if (body[name] === undefined){
    throw new Error(`Field ${name} is required`)
  }
}

const isBoolean = (name, body) => {
  if (typeof body[name] !== 'boolean'  ){
    throw new Error(`Field ${name} is not a Boolean`)
  }
}

const isDate = (name, body) => {
  if ( isNaN( new Date(body[name]).getTime() ) ){
    throw new Error(`Field ${name} is not a Date`)
  }
}




module.exports = { isPresent, isBoolean, isDate }