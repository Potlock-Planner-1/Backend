const router = require("express").Router();

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");



const Users = require("./auth-model.js");
const { isValid } = require("./auth-service.js");

router.post("/register", (req, res) => {
    const credentials = req.body;

    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8;

        // here hashing  the password
        const hash = bcryptjs.hashSync(credentials.password, rounds);

        credentials.password = hash;

        // and here saving the user to the database
        Users.add(credentials)
            .then(user => {
                const token = makeJwt(user);

                res.status(201).json({ data: user, token });
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message: "please provide username and password and the password should be alphanumeric",
        });
    }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (isValid(req.body)) {
        Users.findBy({ username: username })
            .then(([user]) => {
                console.log("user", user);
                // compare the password the hash stored in the database
                if (user && bcryptjs.compareSync(password, user.password)) {
                    const token = makeJwt(user);

                    res.status(200).json({ message: "Welcome to our API", token });
                } else {
                    res.status(401).json({ message: "Invalid credentials" });
                }
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message: "please provide username and password and the password should be alphanumeric",
        });
    }
});

function makeJwt(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        role: user.role,
    };

    const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

    const options = {
        expiresIn: "1d",
    };

    return jwt.sign(payload, secret, options);
}

module.exports = router;
