const http = require('http');
const SERVER_PORT = 3000;

const SERVER_HOSTNAME = "127.0.0.1";
const server = http.createServer();

server.on("listening", () => console.log("Server Listening"));
server.on("error", () => console.log("Error while handling request"));

server.on("request", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hey there response");
});

server.listen(SERVER_PORT, SERVER_HOSTNAME, () => {
    console.log(`Server is up and running on port ${SERVER_PORT} and host ${SERVER_HOSTNAME}`);
})
