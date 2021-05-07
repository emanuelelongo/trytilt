const axios = require('axios');

const host = process.env["SERVER_SVC_SERVICE_HOST"];
const port = process.env["SERVER_SVC_SERVICE_PORT"];

setInterval(() =>
    axios.get(`http://${host}:${port}`)
    .then(res => {
        console.log(`${res.status} - received ${res.data}`);
    })
    .catch(err => {
        console.log('Error: ', err.message);
    }),
    3000
);