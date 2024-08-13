const { PrismaClient } = require('@prisma/client')
const prisma =new PrismaClient()

//Get all students
const getAllStudents =async(req,res)=>{
    try {
        const students=await prisma.student.findMany()
        res.json(students)

    }
    catch(error){
        console.error(error.message)
        res.status(500).send('Server error')
    }
}


//Get student by ID
const getStudentById = async(req,res)=>{
    try{
        const student =await prisma.student.findUnique({
            where:{
                id:parseInt(req.params.id),
            }
        })
        if (!student){
            return res.status(404).json({
                message:"Student Not Found"
            })
            
        }
        res.json(student)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send('Server Error')
    }
}

//Create Student
const createStudent= async(req,res)=>{
    try{
        const {name,age,grade}=req.body
        const student =await prisma.student.create({
            data:{name,age,grade},
        })
        res.status(201).json(student)

    }
    catch(error){
        console.error(error.message)
        res.status(500).send('Server Error')
    }
}

//Update student
const updateStudent=async(req,res)=>{
    try{
        const {name,age,grade} =req.body
        const student =await prisma.student.update({
            where:{ id:parseInt(req.params.id)},
            data:{name,age,grade},
        })
        res.json(student)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send('Server Error')
    }
}

//Delete Student

const deleteStudent =async (req,res)=>{
    try {
       
        await prisma.student.delete({
            where:{
                id:parseInt(req.params.id)
            },
        })
        res.json({message:"student deleted successfully"})

    }catch(error){
        console.error(error.message)
        res.status(500).send('Server Error')
    }
}

module.exports={
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}