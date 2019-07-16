let http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("This is the Inec server that Femi TAIWO deleted, It has been restored, Congrats\n");
});

server.listen(3000, function () {
    console.log('Server is running at 3000')
});