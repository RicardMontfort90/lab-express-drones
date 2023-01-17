// Iteration #1
const mongoose = require('mongoose');
const { Schema } = mongoose;

const droneSchema = new Schema ({
    name: {
        type: String,
        required: [true, `Put a drone's name`]
    },
    propellers: {
        type: Number,
        min: 1
    },
    maxSpeed: {
        type: Number
    }
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;