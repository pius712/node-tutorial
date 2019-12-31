const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('visit',()=>{
    console.log('thank you for visit');
});

myEvent.on('end', ()=>{
    console.log('get out of here');
});

myEvent.on('end',()=>{
    console.log('fuck off');
});

myEvent.once('special', ()=>{
    console.log('한 번 실행됨');
});

myEvent.emit('visit');
myEvent.emit('end');
myEvent.emit('special');
myEvent.emit('special');

myEvent.on('continue', ()=>{
    console.log('listening...');
});

myEvent.removeAllListeners('continue');
myEvent.emit('continue');

const callback1 = ()=>{
    console.log('callback1');
}
const callback2 = ()=>{
    console.log('callback2');
}
myEvent.on('end1', callback1);
myEvent.on('end1', callback2);
myEvent.removeListener('end1', callback1);
myEvent.emit('end1');