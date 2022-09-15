const http = require('http');
const MyModule = require("./module");

const PORT = 5000;

const server = http.createServer(function (req, res) {
   const _myModule = new MyModule.MyModule("John");

   res.write(_myModule.printHello());
   res.end();
});

server.listen(PORT);

console.log(`Server listens to http://localhost:${PORT}`)