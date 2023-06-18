const express = require('express')
const cors = require('cors')
const db = require('./config/db')

const app = express()
app.use(cors())
app.use(express.json());


const PORT = 5000

db.connection
    .once('open', () => console.log("Mongo DB is connectred"))
    .on("error", (err) => console.log("error >>>>", err)) 

app.listen(5000, () => {
    console.log('App is listening on port ', PORT)
})

app.use('/apis', require('./rootRoute'))

app.get('/', function (req, res) {
    res.send({
        status: 200,
        message: "Api is working",
        data: []
    })
})









