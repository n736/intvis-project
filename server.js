const http = require('http');
const fs = require('fs');
const foodapi = require('./foodapi.js');

const hostname = '127.0.0.1'
const port = 80;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('./index.html', null, function (error, data) {
    if (error) {
      response.writeHead(404);
      response.write('Page not found');
    } else {
      response.write(data);
    }
    response.end();
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



console.log(JSON.stringify(foodapi.getMenuItem(424571)));
foodapi.getMenuItem(424571)