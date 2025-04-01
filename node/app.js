const express = require('express');
const app = express();

//register view engine
app.set('view engine', 'ejs');

app.listen(3000);

//middleware static files
app.use( express.static('public'));

app.get('/', (req, res)=> {
    //res.sendFile('./views/index.html', {root: __dirname});

    const blogs = [
        {title: "food study", snippet: 'foooo', body: 'get to study many foods'},
        {title: "electronics", snippet: 'tronicccc', body: 'electronics are manmade'}
    ];
    res.render('index', {blogs: blogs});    
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
