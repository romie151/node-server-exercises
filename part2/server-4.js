const http = require('http');
const fs = require('fs')
const port = 3000

function read(fileName, res) {
    fs.readFile(fileName, (err, data) => {
        if (err) throw err
        res.write(data)
        res.end()
    })
}

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/') {
      read('index.html', res)
    } else if(req.url === "/page-2") {
        read('page2.html', res)
    }
});

server.listen(port, () => {
    console.log(`Server running at on http://localhost:${port}`);
});