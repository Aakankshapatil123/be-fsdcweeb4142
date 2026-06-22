// import http module
const http = require('http');

// create a http server
const server = http.createServer((request, response) => {
  // response.setHeader('Content-Type', 'application/json');
  // response.writeHead(201, { 'Content-Type': 'text/plain' });
  // response.writeHead(200, { 'Content-Type': 'application/json' });
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>NODEJS</title>
      </head>

      <body>
        <div>
          <h1>Hello World!</h1>
          <p>Welcome</p>
        </div>
      </body>
    </hml>
    `);
  response.end();
});

// run the http server
server.listen(3001, 'localhost', () => {
  console.log('server is running @ http://localhost:3001');
});