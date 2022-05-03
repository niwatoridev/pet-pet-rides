const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const carSchema = new Schema(
{
owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },  
model: {
    type:String,
    required: true,
},
doors: {
    type:Number,
    required: true,
},
typeOfCar: {
    type: String,
    required: true,
    enum: ["hatchback", "SUV", "sedan", "mini SUV", "van"],
},
seats: {
    type: Number,
    required: true,
}


});

const Car = model("Car", carSchema);

module.exports = Car;