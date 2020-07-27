const router = require("express").Router();

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Potluck = require("./potluck-model.js")

router.get("/", (req, res) => {
    Potluck.find()
    .then(potlucks => {
        res.status(200).json(potlucks)
    })
    .catch(error => {
        res.status(500).json({ message: " potlucks data can not be retrieved"})
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    Projects.getByTasksId(id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "Task with the ID can not be retrieved"})
        })
})