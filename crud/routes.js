const express=require('express')
const User=require('./user')

const router = express.Router()

//create a new user

router.post('/users',async(req,res)=>{
    const { personal, vehicle } = req.body; // Destructure the personal and vehicle objects from the request body

    const user = new User({
        personal: {
            name: personal.name,
            email: personal.email,
            company: personal.company,
            mobile: personal.mobile
        },
        vehicle: {
            plateno: vehicle.plateno,
            type: vehicle.type,
            modelname: vehicle.modelname
        }
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// Get all users

router.get('/users',async(req,res)=>{
    try{
        const users=await User.find({})
        res.send(users)
    }
    catch{
        console.error(error)
        res.status(500).send(error)
    }
})

//get for specific id

router.get('/users/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const users=await User.findById(id)
        if(!users){
            return res.status(404).send({message:"User not found"})
        }
        res.send(users)
    }
    catch{
        console.error(error)
        res.status(500).send(error)
    }
})

//update a user
router.put('/users/:id',async(req,res)=>{
    const {id}=req.params
    const { personal,vehicle }=req.body
    try{
        const user= await User.findByIdAndUpdate(
            id,
            {
                personal:{
                    name:personal.name,
                    email:personal.email,
                    company:personal.company,
                    mobile:personal.mobile
                },
                vehicle:{
                    plateno:vehicle.plateno,
                    type:vehicle.type,
                    modelname:vehicle.modelname
                }
            },
            {new: true , runValidators: true}
        )
        if(!user){
            return res.status(404).send('User not found')
        }
        res.send(user)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
})

//Remove a user

router.delete('/users/:id',async(req,res)=>{
    const { id }= req.params;
    try {
        const user=await User.findByIdAndDelete(id)
        res.send(user)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
})

module.exports = router