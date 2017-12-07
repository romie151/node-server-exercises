const temp = require('./template.js');
const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(temp.template())
    res.end()
});

server.listen(port, () => {
    console.log(`Server running at on http://localhost:${port}`);
});

