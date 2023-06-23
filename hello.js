const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('race win', function(){
    console.log('Congratulations, you are the best!');
})
celebrity.on('race win', function(){
    console.log('Booo!');
})

celebrity.emit('race win')