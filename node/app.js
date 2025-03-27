const express = require('express');
const app = express();

//register view engine
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res)=> {
    //res.sendFile('./views/index.html', {root: __dirname});
    res.render('index');    
});

app.get('/about', (req, res)=>{
    //res.sendFile('./views/about.html', {root:__dirname});
    res.render('about');
});

//redirects
app.get('/about-us', (req, res)=>{
    res.redirect('/about');
});

//create blog
app.get('/blogs/create', (req, res)=>{
    res.render('create');
})

//404 page
app.use( (req, res)=>{
    //res.sendFile('./views/404.html', {root:__dirname});
    res.render('404')
});
