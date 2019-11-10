const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const expressHandleBars = require("express-handlebars");
const todoRoutes = require("./routes/todos");

const connectUrl = "mongodb+srv://valdis:123@cluster0-kabre.mongodb.net/todos";

const PORT = 3000;

const app = express();
const hbs = expressHandleBars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(todoRoutes);

const start = async() => {
    try {
        await mongoose.connect(connectUrl, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log("Server has been started...")
        })
    } catch (err) {
        console.log(err);
    }
};

start();