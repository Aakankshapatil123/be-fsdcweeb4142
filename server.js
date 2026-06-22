const http = require('http');

const server = http.createServer((request, response) => {
  response.end("hello word!")

});

server.listen(3001, 'localhost', () => {
  console.log('server is running at http://localhost:3001');
})