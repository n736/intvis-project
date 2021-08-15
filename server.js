const express = require('express');
const router = express.Router();
var cors = require('cors')

const app = express();

app.set('view engine', 'ejs');

const foodapi = require('./foodapi.js');
const {
  response
} = require('express');

const hostname = '127.0.0.1'
const port = 80;

app.use(cors())
app.use(express.static('public'));

app.set('index', __dirname + '/public/index.html');

app.get('/', (request, response) => {
  response.render('index', {
    food: {
      calories: 1000
    }
  });
  // response.sendFile(__dirname + '/public/index.html');
})

// app.get('/:query', function (req, res) {
//   console.log(req.params.query);
//   // const food = foodapi.getMenuItem(req.params.query)
//   response.render('index', {
//     food: {
//       calories: 1000
//     }
//   });
// });

app.post('/submit', (request, response) => {
  var food = request.body;
  console.log(`food: ${food}`);
  response.end("good");
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})