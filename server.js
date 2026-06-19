// import http module;
const http = require('http');

// create http server
const server = http.createServer((request, response) => {
response.write("hello nodejs!");
response.end();
});

// run http server
server.listen(3001, 'localhost', () =>{
    console.log('server is runnig @ http://localhost:3001');
});