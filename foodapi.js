const https = require('https');

module.exports = {
    getMenuItem
}

const def_hostname = 'api.spoonacular.com';
const def_port = 443;
const id = 424571;
function getMenuItem(id) {
let result;
    const options = {
        hostname: def_hostname,
        port: def_port,
        path: '/food/menuItems/' + id,
        method: 'GET'
    }
    const request = https.request(options, response => {
        console.log(`statusCode: ${response.statusCode}`);
        response.on('data', data => {
            process.stdout.write(data);
            result = data;
        })
    })
    request.on('error', error => {
        console.error(error);
    })
    request.end();

    return result;
}
  
  