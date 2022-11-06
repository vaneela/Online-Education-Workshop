import express from "express";
import cors from "cors";

const morgarn = require("morgan");
require("dotenv").config();

//create express app
const app = express();

//apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgarn("dev"));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is ruuning on port ${port}`));