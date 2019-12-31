const util = require('util');

const dontuseme = util.deprecate((x, y)=>{
  console.log(x+y);
}, 'message');

dontuseme(1,2);