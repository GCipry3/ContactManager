const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('race win', function(){
    console.log('Congratulations, you are the best!');
})
celebrity.on('race win', function(){
    console.log('Booo!');
})

process.on('exit',()=>{
    console.log('Process exit')
})

celebrity.on('race',(result)=>{
    console.log(`The result is ${result}`)
})

celebrity.emit('race win')
celebrity.emit('race lost')
celebrity.emit('race', 'lost')