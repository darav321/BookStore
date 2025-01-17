const express = require("express")
const mongoose = require('mongoose')
const app = express()
const port = 3000
require('dotenv').config()
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin : ['http://localhost:5173'],
    credentials : true
}))

const bookRoutes = require('./src/routes/books.route')
const orderRoutes = require('./src/routes/orders.route')
const userRoutes = require('./src/routes/user.route')
const adminRoutes = require('./src/stats/admin.stats')
app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) => {
        res.send("Hello World")
    })
}

main().then(()=>console.log("MongoDB connected successfully")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})