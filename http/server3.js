const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');


function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}
const session = {};
const server = http.createServer((req,res)=>{
    // console.log(req.body);
    const cookie = parseCookies(req);
    console.log(req.url);
    if(req.url.startsWith('/login')){
        console.log('hello');
        const { query } = url.parse(req.url);
        console.log('query', query);
        const { name } = qs.parse(query); // { name : 'pius' } 
        const randomInt = +new Date();
        const expires = new Date();
        session[randomInt] = {
            name,
            expires
        };
        // console.log('session', session);
        expires.setMinutes(expires.getMinutes()+5);
        // console.log(name);  
        res.writeHead(302, {
            Location : '/',
            'Set-Cookie' : [`session=${randomInt}; Expires=${expires.toUTCString()}; HttpOnly; path=/`]
            // HttpOnly -- 자바스크립트에서 접근할 수 없다.
            
        })
        res.end(name);
    }else if(cookie.session){

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        console.log(cookie.session);
        console.log(session[cookie.session]);
        console.log('??');
        res.end(`${session[cookie.session].name} 님 안녕하세요.`);
        // console.log(session[cookie.name]);
        // res.end(`${session[cookie.name].name}님 안녕하세요`)
    }else{
        console.log(cookie);
        fs.readFile('./server2.html', (err,data)=>{
            res.write(data);
            res.end();
        })
    }
});

server.listen(8080);
server.on('listening',()=>{
    console.log("server running");
});
server.on('error', (err)=>{
    console.err(err);
});