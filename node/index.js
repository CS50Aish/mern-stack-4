const http = require('http');

const SERVER_PORT = 3000;
const SERVER_HOSTNAME = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end('{"quote": "Search the candle rather than cursing the darkness"}');
});

server.listen(SERVER_PORT, SERVER_HOSTNAME, () =>{
    console.log(`Server is up and running on host ${SERVER_HOSTNAME} and listening on port ${SERVER_PORT}`);
})