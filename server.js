const app = require("./app");



// start the server to losten for http requests
app.listen(3001, 'localhost', (error) =>  {
   if(error){
     console.log('Enter starting the server')
     console.log(error)
     return //exit the function immediatly if there is an error
   }

    console.log('Server is runnig http://localhost:3001')
});