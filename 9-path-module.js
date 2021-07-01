



const path = require('path');

// console.log(path.sep);

// console.log(path.join);

const filepath = path.join('./content\\','subfolder','test.txt');

console.log(filepath);


const baseName = path.basename(filepath);

console.log(baseName);


const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt');

console.log('absolute path: ',absolutePath);

console.log(typeof __dirname);












