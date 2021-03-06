const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const rideSchema = new Schema(
    {
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        departure: String 
    },
    travelDuration: {
            type:String,
            },
    price: {
        type: Number,
        required: true
    },
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    passengers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
    }],
    
    car: {
    type: Schema.Types.ObjectId,
    ref: 'Car'
    },

},
{
    timestamps: true
  }


);

    
    



const Ride = model("Ride", rideSchema);

module.exports = Ride;
