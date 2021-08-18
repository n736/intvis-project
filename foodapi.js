// const https = require('https');

// module.exports = {
//   getMenuItem,
//   getURL
// }

const hostname = 'api.spoonacular.com';
const port = 443;
const apiKey = 'd7ac59ee3c654bf7b4d681e2ac11ffad';

function searchID(id) {
  let path = `/food/menuItems/${id}?apiKey=${apiKey}`
  return `https://${hostname}${path}`;
}

function searchFood(rest, food) {
  let query = `${rest} ${food}`
  let path = `/food/menuItems/search?query=${query}&number=1&apiKey=${apiKey}`
  return `https://${hostname}${path}`;
}

// function getMenuItem(id) {
//   let result;
//   const options = {
//     hostname: def_hostname,
//     port: def_port,
//     path: `/food/menuItems/${id}?apiKey=${apiKey}`,
//     method: 'GET'
//   }
//   const request = https.request(options, response => {
//     console.log(`statusCode: ${response.statusCode}`);
//     response.on('data', data => {
//       process.stdout.write(data);
//       result = data;
//     })
//   })
//   request.on('error', error => {
//     console.error(error);
//   })
//   request.end();

//   return result;
// }

// function getMenu(menuName) {

// }