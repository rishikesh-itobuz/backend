const Contac =require('../models/contactModel.js');

const getContact =async (req,res)=>{
    res.json(await Contac.find());
};
    
  

const postContact = (req,res)=>{
    
    const {name,roll,phone} = req.body
 
    
   if(!name || !roll || !phone){
        res.status(400)
        res.json({
            message:"All Fields are necessary"
        })
    }
    
   
    const contact = new Contac(req.body);
    
        contact.save().then(() => {
            return res.status(201).json({
              statusText: "created",
              message: "document created successfully",
              data: contact,
            });
          })
  .catch((err)=>console.log(err.code))
    
  

    res.send(contact);

    
    
    
    res.end();
}
const updateContact = (req,res)=> {
    console.log("Put is working for",req.params.id)
    res.end();
}
const deleteContact = (req,res)=> {
    console.log(`Delete api working fine ${req.params.id}`)
    res.end()
}



module.exports = {getContact, postContact,updateContact, deleteContact };