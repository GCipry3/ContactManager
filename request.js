// Axios: Promise based HTTP client for the browser and node.js
// Uses XMLHttpRequests from the browser
// Uses http requests from node.js
// Supports the Promise API
// Automatic transforms for JSON data
const axios = require('axios')

axios.get('https://www.cipriangalbeaza.com')
    .then((response) => {
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
    .then(()=>{
        console.log('Done!')
    })