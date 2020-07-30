const router = require("express").Router();

const Users = require("./users-model.js");


//<:<:<:<:<:<: GET :>:>:>:>:>:>\\

router.get("/", (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({ message: "User's data could not be retrieved"})
        })
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    Users.findById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Could not find user with given id." })
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get users" });
    });
});

router.get("/:id/potlucks", (req, res) => {
    const { id } = req.params;
  
    Users.findPotlucks(id)
    .then(potlucks => {
      if (potlucks.length) {
        res.json(potlucks);
      } else {
        res.status(404).json({ message: "Could not find potlucks for given user" })
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get potlucks!!!!!" });
    });
});

//<:<:<:<:<:<: POST :>:>:>:>:>:>\\
router.post("/", (req, res) => {
    const userInfo = req.body;
  
    Users.add(userInfo)
    .then(user => {
      res.status(201).json(user);
    })
    .catch (err => {
      res.status(500).json({ message: "Failed to create new user" });
    });
});

router.post("/:id/potlucks", (req, res) => {
    const potluckInfo = req.body;
    const { id } = req.params; 
    potluckInfo.user_id = id

    Users.findById(id)
    .then(user => {
      if (user) {
        Users.addPotlucks(potluckInfo)
        .then(potluck => {
            res.status(201).json({potluck});          
        })
      }else {
         res.status(404).json({ message: "Could not find Users with given id." })
      }              
    })
    .catch (err => {
      res.status(500).json({ message: "Failed to create new potluck" });
    });
});
  
//<:<:<:<:<:<: PUT :>:>:>:>:>:>\\

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Users.findById(id)
    .then(user => {
      if (user) {
        Users.update(changes, id)
        .then(updatedUser => {
          res.json({message: "user updated", id});
        });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch (err => {
      res.status(500).json({ message: "Failed to update user" });
    });
});

// router.put("/:id/potlucks/:id", (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;
  
//     Users.findById(id)
//     .then(user => {
//       if (user) {
//         Users.update(changes, id)
//         .then(updatedUser => {
//           res.json({message: "user updated", id});
//         });
//       } else {
//         res.status(404).json({ message: "Could not find user with given id" });
//       }
//     })
//     .catch (err => {
//       res.status(500).json({ message: "Failed to update user" });
//     });
// });

//<:<:<:<:<:<: DELETE :>:>:>:>:>:>\\

router.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    Users.remove(id)
    .then(user => {
      if (user) {
        res.json({ removed: user, id });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete user" });
    });
});


module.exports = router