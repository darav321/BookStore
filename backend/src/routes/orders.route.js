const express = require('express')
const router = express.Router()
const Order = require('../models/orders.model.js')
const { createAOrder, getOrderByEmail } = require('../controllers/orders.controller.js')

router.post("/", createAOrder)

router.get("/email/:email", getOrderByEmail)

module.exports = router