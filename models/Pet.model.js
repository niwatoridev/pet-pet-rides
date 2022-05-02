const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const petSchema = new Schema(
{
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
name: {
type:String,
require: true,
},
    typeOfPet: {
    type: String,
    required: true,
    enum: ["dog", "cat"],
},
size: {
    type: String,
    required: true,
    enum: ["small", "medium", "large"],
}




});

const Pet = model("Pet", rideSchema);

module.exports = Pet;