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
const server = http.createServer((req,res)=>{
    const cookie = parseCookies(req);
    if(req.url.startsWith('/login')){
        const parsedUrl = url.parse(req.url);
        const { query } = parsedUrl;
        const { name } = qs.parse(query);
        res.writeHead(302, {
            'location' : '/',
            'Set-Cookie' : [`name=${name}`]
        });
        res.end();
    }else if(cookie.name){
        console.log('?');
        console.log(cookie.name);
        const { name } = cookie;
        res.writeHead(200, {
            'Content-Type' :'text/html; charset=utf-8'
        })
        res.write(`${name}님 안녕하세요.`);
        res.end();
    }
    else{
        console.log(cookie);
        fs.readFile('./server2.html', (err, data)=>{
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
});
// const server = http.createServer((req,res)=>{
//     // console.log(req.body);
//     const cookie = parseCookies(req);
//     console.log(req.url);
//     if(req.url.startsWith('/login')){
//         console.log('hello');
//         const { query } = url.parse(req.url);
//         console.log('query', query);
//         const { name } = qs.parse(query); // { name : 'pius' } 
//         const  expires = new Date();
//         expires.setMinutes(expires.getMinutes()+5);
//         // console.log(name);  
//         res.writeHead(302, {
//             Location : '/',
//             'Set-Cookie' : [`name=${encodeURIComponent(name)}; Expires=${expires.toUTCString()}; HttpOnly; path=/`]
//             // HttpOnly -- 자바스크립트에서 접근할 수 없다.
            
//         })
//         res.end(name);
//     }else if(cookie.name){
//         res.writeHead(200, {
//             'Content-Type': 'text/html; charset=utf-8'
//         });
//         res.end(`${cookie.name}님 안녕하세요`)
//     }else{
//         fs.readFile('./server2.html', (err,data)=>{
//             res.write(data);
//             res.end();
//         })
//     }
// });

server.listen(8080);
server.on('listening',()=>{
    console.log("server running");
});
server.on('error', (err)=>{
    console.err(err);
});