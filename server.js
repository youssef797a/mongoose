const express = require("express")

require("dotenv").config()
const mongoose = require("mongoose")
const Person = require("./personModel")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

connectDB() 
let person = new Person({
    name: "mo",
    age: 20, 
    favoriteFoods: ["spadetti", "pizza", "pain"]
})
const createAndSavePerson = async () =>{
    try {
        await person.save()
    } catch (error) {
        console.log(error);
    }
}

createAndSavePerson()


const app = express()

const PORT = process.env.PORT

app.listen(PORT, (err) => {
    err ? console.log(err)
        : console.log("server running on port " + PORT);  
})