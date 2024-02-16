import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
import bodyParser from "body-parser";
const app = express();

const PORT= process.env.PORT;

mongoose.connect(process.env.URI);
import contact from './routes/form.mjs';

app.use(express.json());
app.use('/contact', contact);

app.get('/contact')
app.listen(PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  })