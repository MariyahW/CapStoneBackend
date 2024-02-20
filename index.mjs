import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
import bodyParser from "body-parser";
const app = express();
import cors  from "cors";
import * as http from 'http'


const PORT= 9000;

mongoose.connect("mongodb+srv://mariyahwatson:M900nbnaldkj@cluster0.fnxa0qy.mongodb.net/ContactForm");
import contact from './routes/form.mjs';

const corsOptions ={
  origin:"*",
  credentials: true,
  optionSuccessStatus:200
}
const server = http.createServer();
server.on('request',app)
app.use(cors(corsOptions));
app.use(express.json());
app.use('/contact', contact);



app.get('/', (req, res)=>res.json("Server is running...use /contact"))
app.get('/contact')
server.listen(PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  })