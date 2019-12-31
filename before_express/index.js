// const http = require('http');

// http.createServer();

// const math = require('./math.js');

// const result = math.sum(3, 5);
// console.log(result);

const fs = require('fs');
//async

const data = fs.readFile('./data.txt', 'UTF-8', (err, data)=>{
    if(err){
        console.log('err');
    }else{
        console.log(data);
    }
});

// Sync
// const data = fs.readFileSync('./data.txt', 'UTF-8');
// console.log(data);
