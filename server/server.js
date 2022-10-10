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

app.use('/news', newsRouter);


const PORT = process.env.Port || 8080;
app.listen(PORT, () => {
    console.log(`app is live at ${PORT}`);
});
