const http = require('http');
const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);
    //console.log(res);
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening on port 3000');
})