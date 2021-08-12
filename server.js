const http = require('http');
const fs = require('fs');
const foodapi = require('./foodapi.js');
const Calculator = require('./calculator.js');

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

// fs.readFile('./data/409777.json', null, function (error, data) {
//   if (error) {
//     console.log("409777.json not found");
//   } else {
//     let json = JSON.parse(data);
//     console.log(json.id);
//     console.log(json.title);
//     console.log(json.nutrition.calories);
//     console.log(json.nutrition.fat);
//     console.log(json.nutrition.carbs);
//     console.log(json.nutrition.protein);
//   }
// })

// const calc = new Calculator(130, 5, 4, 19, "male", false, "None");
// console.log(calc.calories());
// console.log(calc.carbs());
// console.log(calc.fats());
// console.log(calc.proteins());