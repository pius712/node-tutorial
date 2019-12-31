const express = require('express');
const morgan = require('morgan');
const app = express();

function logger(req, res, next){
    console.log('i am logger')
    next(new Error('error occured')); // next 함수 호출.
}

function logger2(req,res,next){
    console.log('i am logger2');
    next();
}

// function logger2(input){
//     // console.log('i am logger2');
//     // next();
//     console.log(input)
//     return logger;
// }

function errorMiddleWare(err,req,res,next){
    console.log(err.message);
 
    // 에러를 처리하거나... 
    next();
}
// app.use(logger);
// app.use(logger2('hello'));
app.use(logger);
app.use(logger2);
app.use(morgan('dev'));
app.use(errorMiddleWare);
app.listen(3000, function(){
    console.log('server is running');
});