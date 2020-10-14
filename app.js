const http = require("http");
const routes = require("./routes");
const port = 3000

console.log(`Server up and running on localhost:${port}`);

const server = http.createServer(routes.handler);

server.listen(port);
