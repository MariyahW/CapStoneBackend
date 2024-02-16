import mongoose from "mongoose";
const Schema = mongoose.Schema;

const model = mongoose.model;

const contactSchema = new Schema({
    name:String,
    email:String,
    phone:String,
    contactReason:String,
    textBox:String
})

const Contact = model("Contact", contactSchema);

export default Contact;