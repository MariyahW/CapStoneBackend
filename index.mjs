import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
import bodyParser from "body-parser";
const app = express();
import cors  from "cors";

const PORT= process.env.PORT;

mongoose.connect(process.env.URI);
import contact from './routes/form.mjs';

const corsOptions ={
  origin:"*",
  credentials: true,
  optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/contact', contact);


app.get('/', (req, res)=>res.json("Server is running...use /contact"))
app.get('/contact')
app.listen(PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  })