// import http module
const http = require('http');

// create a http server
const server = http.createServer((request, response) => {
   const parsedURL = new URL(request.url, `http://${request.headers.host}`);
   const pathname = parsedURL.pathname;


   if(pathname === '/'){
    switch(request.method){
        case 'GET':
          response.writeHead(200, { 'Content-Type': "application/json" });
          response.write(JSON.stringify({message: "hello GET! "}));
          response.end() ;
          break;
        case 'POST':
          response.writeHead(200, { 'Content-Type': "application/json" });
          response.write(JSON.stringify({message: "hello POST! "}));
          response.end() ;
          break;
        case 'PUT':
          response.writeHead(200, { 'Content-Type': "application/json" });
          response.write(JSON.stringify({message: "hello PUT! "}));
          response.end() ;
          break;
        case 'DELETE':
          response.writeHead(200, { 'Content-Type': "application/json" });
          response.write(JSON.stringify({message: "hello DELETE! "}));
          response.end() ;
          break;
        default:
        response.writeHead(404, { "content-type": 'application/json' });
        response.write(JSON.stringify({ message: 'unknown http method' }));
        response.end();
        break;
    }
    }else if(pathname === "/users"){
    response.writeHead(200, { 'Content-Type': "application/json" });
    response.write(JSON.stringify({message: "hello users! "}));
    response.end()    
    }else{
    response.writeHead(200, { 'Content-Type': "application/json" });
    response.write(JSON.stringify({message: " unknow route "}));
    response.end() 
   }

});

// run the http server
server.listen(3001, 'localhost', () => {
  console.log('server is running @ http://localhost:3001');
});