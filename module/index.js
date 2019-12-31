// const { odd, even } = require('./var');
// const bar = require('./func');

// console.log(odd, even);
// console.log(bar());
// console.log(global);

// console.log(__dirname);
// console.log(__filename);

// const os = require('os');
// console.log(os);

// const url = require('url');

// const URL = url.URL;
// const myURL = new URL('https://github.com/pius712/TIL/blob/master/Nodejs/nodejs.md')
// console.log('new URL():', myURL);
// console.log('url.format():',url.format(myURL));
// console.log('---------------------------');
// const parsedURL = url.parse('https://github.com/pius712/TIL/blob/master/Nodejs/nodejs.md');
// console.log('url.parse():', parsedURL);

const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://www.google.com/search?q=%EC%95%84%EC%9D%B4%EC%9C%A0&oq=%EC%95%84%EC%9D%B4%EC%9C%A0&aqs=chrome..69i57j69i61j69i60l2.1752j0j4&sourceid=chrome&ie=UTF-8');
const query = querystring.parse(parsedUrl.query);

console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));