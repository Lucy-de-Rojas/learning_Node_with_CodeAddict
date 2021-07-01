
const os = require('os');

const user = os.userInfo();


// console.log(os.userInfo());
// console.log(os.uptime()/60/60);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()/1000000000,
    freeMem: os.freemem()/1000000000


}

console.log(currentOS);



