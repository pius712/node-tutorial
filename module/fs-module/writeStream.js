const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');

writeStream.on('finish', ()=>{
    console.log('파일 쓰기 완료');
});

writeStream.write('scrible...');
writeStream.write('writing....');
writeStream.end();