if (process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const port = process.env.PORT || 8081;
const mongoose = require('mongoose');
const db = mongoose.connection;
const dbUrl = process.env.DB_URL || process.env.DB_RURL
const Sesapp = require('./models/sesapp');
const infoRoutes = require('./routes/info');
const foodRoutes = require('./routes/foods');


mongoose.connect(dbUrl, {
    useNewUrlParser: true
});

db.on("error", console.error.bind(
    console, "Connection error:"));

db.once("open", () => {
    console.log("Database connected");
})    

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: 'secret session key',
    resave: true,
    saveUninitialized: true,
    name: 'session cookie name'
}));

app.get(('/'), async(req,res) => {
    const cat = [
        'Starters','Salads','Burgers','Drinks'
    ]

    const images = [
        'https://images.unsplash.com/photo-1621852003709-763b0b32da0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnRlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
        'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbGFkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
        'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyaW5rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
    ]

    const session = await Sesapp.find({});
    const sesList = [];
    
    for (let i = 0; i < session.length; i++){
        sesList.push(session[i].sessionNum);
    }

    console.log(sesList);

    const result = sesList.find(
        (session) => session === req.sessionID
    ); 

    console.log(result);

    const sesapp = new Sesapp({
        sessionNum: req.sessionID
    })

    if (result != req.sessionID){
        await sesapp.save()
    }

    console.log(sesList.slice(-1));

    res.render('peppers/home',{cat,images});
})

app.use('/info', infoRoutes);
app.use('/foods', foodRoutes);

app.listen(port, () => {
	console.log(`APP IS LISTENING ON PORT ${port}!`);
}) 