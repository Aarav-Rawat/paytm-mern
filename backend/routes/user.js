const express = require("express");

const router = express.Router();

const signupSchema = z.object({
    username: z.string(),
    password: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    
})

router.post("/signup", (req, res) => {

});

module.exports = router;
