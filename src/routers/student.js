const express = require("express");
const Student = require("../models/students");
const router = new express.Router();

//create a new student
// router.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body); 
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((error) => {
//         res.status(400).send(error);
//     })
//    // res.end("Hello from other side");
// })


router.post("/students", async(req, res) => {
    try{
        console.log(req.body);
        const user = new Student(req.body); 
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch(e){
        res.status(400).send(e);
    }
})


//read the data of registered students
router.get("/students", async(req, res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch(e) {
        res.status(400).send(e);
    }
})

//read the data of individual student using id
router.get("/students/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData);
    } catch(e) {
        res.status(500).send(e);
    }
})

//read the data of individual student using name
router.get("/students/:name", async(req, res) => {
    try{
        const name = req.params.name;
        const studentData = await Student.find({name : name});
        res.send(studentData);
    } catch(e) {
        res.status(500).send(e);
    }
})

//update the data of individual student using id
router.patch("/students/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(updateStudents);
    } catch(e) {
        res.status(400).send(e);
    }
})

//delete the data of individual student using id
router.delete("/students/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        res.send(deleteStudent);
    } catch(e) {
        res.status(500).send(e);
    }
})


module.exports = router;