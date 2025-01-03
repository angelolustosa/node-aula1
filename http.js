// importanto o módulo http, doc: https://nodejs.org/api/http.html#class-httpserver
const http = require('http');

// criar o servidor
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n, Angelo');
});

//subir o servidor
server.listen(5000); 
