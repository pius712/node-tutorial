var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  // https://cautis.cau.ac.kr/TIS/websquare/websquare.jsp?w2xPath=/TIS/prof/gtm/pGtmWel009.xml
  request.get('//mportal.cau.ac.kr/portlet/p005/p005.ajax',(err,response,body)=>{
    console.log('response',response);
    console.log('body',body);  
  // const { statusCode } = response;
    // if(statusCode !== 200 || statusCode !== 201 || statusCode !== 202){
    //   error = new Error('request failed');
    // }else{
    //   console.log('??');
    //   console.log('res: ', response);
    // }
    res.render('index', { title: 'Express' });
  })
});

//
module.exports = router;
