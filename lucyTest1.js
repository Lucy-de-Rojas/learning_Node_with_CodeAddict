


const { writeFile } = require('fs');



writeFile(
    './content/lucyTest.txt',
    'hello from lucy',
    (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(result);
    }

);