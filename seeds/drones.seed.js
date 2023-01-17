// Iteration #1
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Drone = require('../models/Drone.model');
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

// Data
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

// Connection to DB

mongoose
    .connect(MONGO_URI)
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .then(() => {
        return Drone.create(drones);
    })
    .then(createdDrones => console.log(`${createdDrones.length} drones added to de DB`))
    .then(() => mongoose.connection.close())
    .catch(err => console.error(err));