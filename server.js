const http = require("http");

const hostname = "localhost"; // 127.0.0.1
const port = 6969;

// Hàm render ra website
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n Hoi Dan IT Mait ve nha roi");
});

// server để chạy
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
