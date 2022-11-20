import express from "express";
import cors from "cors";
import {readdirSync } from "fs";
const morgarn = require("morgan");
require("dotenv").config();

//create express app
const app = express();

// db connect

//apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgarn("dev"));

// route
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`))); 
// app.get('/', );

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is ruuning on port ${port}`));