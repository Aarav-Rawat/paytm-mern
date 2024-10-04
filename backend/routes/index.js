const express = require('express');
const router = express.Router();


const userRouter = require('./user');


app.use("/user",user);

module.exports = router