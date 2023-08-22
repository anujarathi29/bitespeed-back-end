const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://anujarathi2:412ZlnFwb4NXgy5b@cluster0.boahb2j.mongodb.net/?retryWrites=true&w=majority")
    .then(() => { console.log("connected to the database"); })
    .catch((err) => console.log("Failed to connect to the database", err))