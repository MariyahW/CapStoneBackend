import  express from 'express';
import Contact from '../models/contact.mjs';

const router = express.Router();
//Create
router.post('/', async (req, res)=>{
    let contactInfo= req.body;
   let newContact= await Contact.create({  
        "name":contactInfo.name,
        "email":contactInfo.email,
        "phone":contactInfo.phone,
        "contactReason":contactInfo.contactReason,
        "textBox":contactInfo.textBox});
        res.status(201).send(`Use this ID number to make changes to your inquiry ${newContact._id}`);
})

//Read 

router.get('/:id', async (req,res)=>{
    let contact=await Contact.findById(req.params.id);
    res.status(200).json(contact);
})
router.put('/:id', async (req,res)=>{
    await Contact.findByIdAndUpdate(req.params.id, req.body,{new:true});
  
        res.status(200).json(req.body);
    
   
})
//Delete is not appropriate as I do not want them to be able to delete their inquiry


export default router;