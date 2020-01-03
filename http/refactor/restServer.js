const http = require('http');
const fs = require('fs');

const users = {"1": "pius", "2": "pius712"};
const server = http.createServer((req, res)=>{
    if(req.method === 'GET'){
        if(req.url==='/'){
            return fs.readFile('./restFront.html',(err,data)=>{
                if(err){
                    throw err;
                }else{
                    res.end(data);
                }
            })
        }else if(req.url==='/users'){
            return res.end(JSON.stringify(users));
        }

        return fs.readFile(`.${req.url}`,(err,data)=>{
            return res.end(data);
        })
    }else if(req.method === 'POST'){  
        if(req.url === '/users'){
            let body = '';
            req.on('data', (chunk)=>{
                body += chunk;
            });
            req.on('end', ()=>{
                console.log( 'POST 본문(body)', body);
                const { name } = JSON.parse(body);
                const id = +new Date();
                users[id] = name;
                console.log(users);
                res.writeHead(201);
                res.end('사용자 등록 성공');
            })
        }
    }else if(req.method ==='PUT'){
        if(req.url === '/'){

        }else if(req.url.startsWith('/users/')){
            const id = req.url.split('/')[2];
            let body = '';
            req.on('data', (chunk)=>{
                body += chunk;
            });
            req.on('end',()=>{
                console.log('put', body);
                users[id] = JSON.parse(body).name;
                return res.end(JSON.stringify(users));
            })
        }
    }else if(req.method === 'DELETE'){
        if(req.url === '/'){

        }else if(req.url.startsWith('/users/')){
            const id = req.url.split('/')[2];
            let body = '';
            console.log('delete method');
            req.on('data', (chunk)=>{
                body += chunk;
            });
            req.on('end',()=>{
                console.log('delete', body);
                delete users[id];
                return res.end(JSON.stringify(users));
            })
        }
    }else if(req.method === 'PATCH'){
        
    }
})
.listen(8080, ()=>{
    console.log('server running');
})