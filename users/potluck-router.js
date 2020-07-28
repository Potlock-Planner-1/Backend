const router = require("express").Router();

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Potluck = require("./potluck-model.js")

router.post("/", (req, res) => {
    const postPotluck = req.body;

    Potluck.add(postPotluck)
        .then(potluck => {
            res.status(200).json(potluck)
        })
        .then(error => {
            res.status(500).json({message: "failed to create a new potluck"})
        })

})

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

    Potluck.findById(id)
        .then(potluck => {
            res.status(200).json(potluck)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "potluck with the ID does not exists"})
        })
})


router.put("/:id", (req, res) => {
    const { id } = req.params
    const change = req.body

    Potluck.findById(id)
        .then(potluck => {
            if(potLuck){
                Potluck.update(change, id)
                    .then(updatePotluck => {
                        res.status(200).json(updatePotluck)
                    })
            }else {
                res.status(404).json({message: "potluck with id can not be found"})
            }
        })
        .catch (error => {
            res.status(500).json({ message: "potluck info can not be updated"})
        })
})


router.delete('/:id', (req, res) => {
    const { id } = req.params

    Potluck.remove(id)
        .then(potluck => {
        if (potluck) {
            res.status(204).json({ removed: deleted});
        } else {
            res.status(404).json({ message: 'potluck with id could not be found' });
        }
        })
        .catch(error => {
            res.status(500).json({ message: "failed to delete the potluck"});
        });
  });
  
  module.exports = server;