const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) throw err
        res.write(data)
        res.end();
        // console.log(data)
  })
});

server.listen(port, () => {
  console.log(`Server running at on http://localhost:${port}`);
});

