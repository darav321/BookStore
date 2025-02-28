const express = require('express');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const router = express.Router()
const bcrypt = require('bcrypt')


router.post('/admin', async (req, res) => {
    const {username, password} = req.body;
    try {
        const admin = await User.findOne({username})
        if(!admin) {
            res.status(404).send({message : "Admin not found"})
        }
        if(admin.password !== password) {
            res.status(401).send({message : "Invalid Password"})
        }
        
        const token = jwt.sign({id : admin._id, username : admin.username, role : admin.role}, JWT_SECRET, {expiresIn : "1h"})

        return res.status(200).json({message : "Authentication successful", token : token, user : {username:admin.username, password : admin.password , role : admin.role}})
    } catch (error) {
        console.log("Failed to login as admin", error);
        res.status(401).send({message : "Invalid credentials"})
    }
})


module.exports = router