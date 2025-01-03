// importanto o módulo http, doc: https://nodejs.org/api/http.html#class-httpserver
const http = require('http');

const PORT = 5000;
const HOST = '127.0.0.1'

// criar o servidor
const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Apenas permite GET')
    } else {
        res.statusCode = 405; // Não permitido
        res.setHeader('Content-Type', 'text/plain');
        res.end('Método não permitido!');
    }
    /* res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World,\n Angelo'); */
});

//subir o servidor
server.listen(PORT, HOST, ()=> {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
}); 
