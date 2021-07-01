
const http = require('http');
let menu = `
<a href='/'>Home</a><br/>
<a href='/about'>about</a><br/>
<a href='/contact'>contact</a><br/>
`;


const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.end(`
        <h1>hello home page</h1>
        ${menu}
        `);
    }

    else if(req.url === '/about') {
        res.end(`
        <h1>About</h1>
        ${menu}
        `);
    }

    else if(req.url==='/contact') {
        res.end(`
        <h1>contact</h1>
        ${menu}
        
        `);
    }

    else {
        res.end(`
        <h1>no url</h1>
        ${menu}
        `);
    }





});


server.listen(5000);






























