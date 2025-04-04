import express from 'express';
import { getNotes, getNote, createNote, deleteNote } from './database.js';
import {check, validationResult} from 'express-validator';//validation of user inputs


const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, JS)
app.use(express.static('public'));

//handle forms data
app.use(express.urlencoded({extended: false}));

// handle validation on any kind of input coming from outside
app.post('/submit-note', [
    check('title').notEmpty().withMessage("title is required").isLength({min: 4}),
    check('content').notEmpty().withMessage("content should be more than 10 characters").isLength({min:10})
], async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(406).render('createNotes', {
            errors: errors.array(),
            title: req.body.title,
            content: req.body.content
        })
    }

    const title= req.body.title;
    const content= req.body.content;
    try{
        await createNote(title, content);
        res.redirect('/notes');

    }catch(err){
        console.log(err);
        res.status(500).send("error saving note");
    }
})

//getting notes, displaying them
app.get('/notes', async(req, res)=>{
    try{
        const notes = await getNotes();
        res.render('mynotes', {notes});
    } catch(err){
        res.status(500).send("error fetching notes");
    }
});

//create note view
app.get('/create-note', (req, res)=>{
    res.render('createNotes', {errors: []});
})

//delete a note
app.delete('/notes/:id', async (req, res)=>{
    const id = req.params.id;
    try{
        await deleteNote(id)
    } catch(err){
        console.log(err);
    }
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });

app.listen(8080, ()=>{
    console.log("server running at port 8080");
});