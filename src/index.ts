require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';

mongoose.set("strictQuery", true);

if (!process.env.DATABASE_URL) {
  throw new Error("Unexpected error: Missing database connection");
}
const mongoString : string = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection;

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});