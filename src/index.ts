require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});