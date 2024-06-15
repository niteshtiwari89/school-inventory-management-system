const mongoose = require("mongoose");
const uri = "mongodb+srv://school_inventory:school123@school.m5z4pna.mongodb.net/?retryWrites=true&w=majority&appName=school";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };