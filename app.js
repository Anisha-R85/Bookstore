const express= require('express');
const mongoose=require('mongoose');
const cookieParser = require('cookie-parser');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const jwt = require('jsonwebtoken');
const {checkUser}  = require('./middleware/authmiddleware');



const app= express();
const dbURI='mongodb+srv://anishar:ani123456@cluster0.laewj.mongodb.net/Node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get('*',checkUser);
app.get('/',(req, res) => {
res.redirect('/books')
});

app.get('/about',(req, res) => {
res.render('about', {title:'About'})
});

//app.routes

app.use('/books',bookRoutes);
app.use('/',authRoutes);



app.use((req,res) =>{
res.status(404).render('404', {title:'404'})
});

