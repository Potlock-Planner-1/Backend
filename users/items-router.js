const router = require("express").Router();

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Items = require("./items-model.js")

router.post("/", (req, res) => {
    const postItem = req.body;

    Items.add(postItem)
        .then(item => {
            res.status(200).json(item)
        })
        .then(error => {
            res.status(500).json({message: "failed to create a new item"})
        })

})

router.get("/", (req, res) => {
    Items.find()
    .then(items => {
        res.status(200).json(items)
    })
    .catch(error => {
        res.status(500).json({ message: " items data can not be retrieved"})
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params

    Potluck.findById(id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "item with the ID does not exists"})
        })
})


router.put("/:id", (req, res) => {
    const { id } = req.params
    const changes = req.body

    Items.findById(id)
        .then(item => {
            if(item){
                Items.update(changes, id)
                    .then(updateItem => {
                        res.status(200).json(updateItem)
                    })
            }else {
                res.status(404).json({message: "item with id can not be found"})
            }
        })
        .catch (error => {
            res.status(500).json({ message: "item info can not be updated"})
        })
})


router.delete('/:id', (req, res) => {
    const { id } = req.params

    Items.remove(id)
        .then(item => {
        if (item) {
            res.status(204).json({ removed: deleted});
        } else {
            res.status(404).json({ message: 'item with id could not be found' });
        }
        })
        .catch(error => {
            res.status(500).json({ message: "failed to delete the item"});
        });
  });
  
  module.exports = router;