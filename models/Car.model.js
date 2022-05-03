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
    enum: ["Hatchback", "SUV", "Sedan", "Mini SUV", "Van"],
},
seats: {
    type: Number,
    required: true,
}
},
{
    timestamps: true
  }


);

const Car = model("Car", carSchema);

module.exports = Car;