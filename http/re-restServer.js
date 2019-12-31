const http = require('http');
const fs = require('fs');
const router = {
    get:{
        '/': (req,res) =>{ },
        '/users' : (req,res) =>{ },
        '*': (req,res) =>{ }
    },
    post:{
        '/users' : (req,res) =>{}
    },
    patch:{

    },
    put:{

    },
    delete:{

    }
};
// 위와 같이 router 객체를 따로 만들어서 코드를 작성하면 깔끔하게 정리할 수 있다. ㄷ ㄷ ㄷ ㄷ ;;;;
const server = http.createServer((req,res)=>{
    const matchedUrl = router[req.method.toLowerCase()][req.url];
    (matchedUrl || router[req,method.toLowerCase()]['*'])(req,res);  
    // matchedUrl(req,res); 함수 호출 matchedUrl이 없으면 '*'의 함수를 실행 와.. 씹.. 감동..
}).listen(8080, ()=>{
    console.log('8080 server running');
})

