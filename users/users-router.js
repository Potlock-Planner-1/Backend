const router = require("express").Router();

const Users = require("../auth/auth-router.js");

router.get("/", (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({ message: "User's data could not be retrieved"})
        })
})





module.exports = router