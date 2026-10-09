const express = require("express");
const cors = require('cors'); 

const config = require("./constants/config.constant");


const app = express();

app.use(
  cors({
    origin: config.cors.origin,
    credentials: config.cors.credentials,
    method: config.cors.method,
  }),
);


app.use(express.json({limit: '10mb'})); 
app.use(express.urlencoded({extended: true, limit: '10mb'})); 

// app.use(config.api.prefix) 

module.exports = app; 