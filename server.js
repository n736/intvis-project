const express = require('express');
const router = express.Router();
var cors = require('cors')

const app = express();

const foodapi = require('./foodapi.js');

const hostname = '127.0.0.1'
const port = 80;

app.use(cors())
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
})

app.post('/submit', (request, response) => {
  var food = request.body;
  console.log(`food: ${food}`);
  response.end("good");
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})