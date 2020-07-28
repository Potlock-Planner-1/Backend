const router = require("express").Router();

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Guests = require("./guests-model.js")

router.post("/", (req, res) => {
    const postGuest = req.body;

    Guests.add(postGuest)
        .then(guest => {
            res.status(200).json(guest)
        })
        .then(error => {
            res.status(500).json({message: "failed to create a new item"})
        })

})

router.get("/", (req, res) => {
    Guests.find()
    .then(guests => {
        res.status(200).json(guests)
    })
    .catch(error => {
        res.status(500).json({ message: " items data can not be retrieved"})
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params

    Guests.findById(id)
        .then(guest => {
            res.status(200).json(guest)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "item with the ID does not exists"})
        })
})


router.put("/:id", (req, res) => {
    const { id } = req.params
    const changes = req.body

    Guests.findById(id)
        .then(guest => {
            if(guest){
                Guests.update(changes, id)
                    .then(updateGuest => {
                        res.status(200).json(updateGuest)
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

    Guests.remove(id)
        .then(guest => {
        if (guest) {
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