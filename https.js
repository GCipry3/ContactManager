const internals = require('./internals')
// const {send} = require('./request')
// const {read} = require('./response')
function request(url, data){
    internals.request.send(url, data);
    return internals.response.read();
}

const responseData = request('random url','my data')
console.log(responseData)