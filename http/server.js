const http = require('http'); // 이 모듈이 서버 역할을 하는 것.
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log('server running'); //서버 방문시 콜백실행
    // res.write('<h1>hello world</h1>');
    // res.write('<h2>hello world</h2>');
    // res.write('<h3>hello world</h3>');
    // res.end();
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {
        'Set-Cookie':['mycookie=test']
    });
    fs.readFile('./server.html',(err,data)=>{  // 첫번째 인자를 읽어서 버퍼가 data에 담긴다. 
        if(err){
            throw err;
        }
        res.end(data);
    });
}).listen(8080);

server.on('listening', ()=>{
    console.log('8080 port listening');
}); // http 기본 포트 : 80  https :443 
server.on('error', (err)=>{
    console.error(err);
})