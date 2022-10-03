const express = require("express");
const { registerUser, showParams } = require("../controller/register");
const router = express.Router()

router.get('/', (req, res) => {
    return res.json({data : "this is coming from route"})
})

router.post('/register', registerUser)

router.get("/:id", showParams )

module.exports = router;