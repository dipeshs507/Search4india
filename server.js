const express = require("express");
const bodyparser = require('body-parser')
const path = require('path')
const { config } = require('process')
require('dotenv').config();
const app = express();

const newsRouter = require('./routes/news');

//DataBase Configration 
require("./db/connection");

// app use
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static('client/build'))

app.get('*',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'client','build','index.html'))

})
app.use('/news', newsRouter);


const PORT = process.env.Port || 8080;
app.listen(PORT, () => {
    console.log(`app is live at ${PORT}`);
});
