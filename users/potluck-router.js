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

    Potluck.findById(id)
        .then(potluck => {
            if(potluck) {
                res.status(200).json(potluck)
            }else {
                res.status(404).json({message: "potluck with the ID does not exists"})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "failed to get potlucks"})
        })
})

router.get('/:id/items', (req, res) => {
    const { id } = req.params;
  
    Potluck.findItem(id)
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.status(404).json({ message: 'Could not find items for given scheme' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get items' });
    });
});

router.get('/:id/guests', (req, res) => {
    const { id } = req.params;
  
    Potluck.findGuest(id)
    .then(guests => {
      if (guests.length) {
        res.json(guests);
      } else {
        res.status(404).json({ message: 'Could not find guests for given scheme' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get guests' });
    });
});

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

router.post('/:id/items', (req, res) => {
    const itemData = req.body;
    const { id } = req.params; 
  
    Potluck.findById(id)
    .then(potluck => {
      if (potluck) {
        Potluck.addItem(itemData, id)
        .then(item => {
          res.status(201).json(item);
        })
      } else {
        res.status(404).json({ message: 'Could not find potluck with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to post new item' });
    });
});

router.post('/:id/guests', (req, res) => {
    const guestData = req.body;
    const { id } = req.params; 
  
    Potluck.findById(id)
    .then(potluck => {
      if (potluck) {
        Potluck.addGuest(guestData, id)
        .then(guest => {
          res.status(201).json(guest);
        })
      } else {
        res.status(404).json({ message: 'Could not find potluck with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to post new guest' });
    });
});


router.put("/:id", (req, res) => {
    const { id } = req.params
    const changes = req.body

    Potluck.findById(id)
        .then(potluck => {
            if(potluck){
                Potluck.update(changes, id)
                    .then(updatePotluck => {
                        res.status(200).json({message: "potluck updated", id})
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
            res.json({ removed: potluck, id });
        } else {
            res.status(404).json({ message: 'potluck with id could not be found' });
        }
        })
        .catch(error => {
            res.status(500).json({ message: "failed to delete the potluck"});
        });
  });
  
  module.exports = router;