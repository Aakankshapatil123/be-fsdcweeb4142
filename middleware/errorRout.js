// handle the error routes
const errorRout = (request, response, next) => {
response.json({message: "Route not found"})
}

module.exports = errorRout;