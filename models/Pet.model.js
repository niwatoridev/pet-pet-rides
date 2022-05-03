const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const petSchema = new Schema(
{
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
petName: {
type:String,
require: true,
},
    typeOfPet: {
    type: String,
    required: true,
    enum: ["Dog", "Cat"],
},
size: {
    type: String,
    required: true,
    enum: ["Small", "Medium", "Large"],
}

},
{
    timestamps: true
  }


);

const Pet = model("Pet", petSchema);

module.exports = Pet;