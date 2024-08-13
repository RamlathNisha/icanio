const express = require('express')
const { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController')


const router =express.Router()
 router.get('/students',getAllStudents)
 router.get('students/id',getStudentById)
 router.post('/students',createStudent)
 router.put('/students/:id',updateStudent)
 router.delete('/students/:id',deleteStudent)

 module.exports = router
