const mongoose = require("mongoose")

const personeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age:Number,
    favoriteFoods: [String]
})

const Person = mongoose.model("People", personeSchema)

module.exports = Person 