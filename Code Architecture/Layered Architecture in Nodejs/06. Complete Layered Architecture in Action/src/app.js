const express = require("express");
const cors = require("cors");
const config = require("./constants/config.constant");
const appRoutes = require("./routes/index.route");

const app = express;

app.use(
  cors({
    origin: config.cors.origin,
    credentials: config.cors.credentials,
    methods: config.cors.methods,
  }),
);

app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({extended:true, limit:'10mb'}));
app.use(config.api.prefix, appRoutes);

module.exports = app;
