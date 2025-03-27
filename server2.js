const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=> {
    //set header content
    res.setHeader('content-type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;

        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }

    //read file
    fs.readFile(path, (err, data)=>{
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }

    })
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening at port 3000');
})