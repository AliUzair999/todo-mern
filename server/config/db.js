const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin@cluster0.mn5uhcg.mongodb.net/db1?retryWrites=true&w=majority")

module.exports = mongoose