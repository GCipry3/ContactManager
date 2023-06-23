const {request, get} = require('http')

const req = request('http://www.google.com', (res)=>{
    res.on('data',(chunk)=>{
        console.log(`Data chunk is ${chunk}`)
    })

    res.on('end',()=>{
        console.log('!!No more data1!!')
    })
})

req.end()

get('http://www.google.com', (res)=>{
    res.on('data',(chunk)=>{
        console.log(`Data chunk is ${chunk}`)
    })

    res.on('end',()=>{
        console.log('!!No more data2!!')
    })
})