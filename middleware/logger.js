// middleware that acts like an oprator that logas all the request to the console or log file
const logger = (request, response, next) => {
 console.log(request.method, request.url);
 next(); //calss the next middleware
}

module.exports = logger;