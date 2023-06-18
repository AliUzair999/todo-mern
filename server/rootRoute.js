const express = require('express')
const router = express.Router()

router.use('/todo', require('./routes/todoRoutes'))

module.exports = router