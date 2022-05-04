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
    enum: ["Perro", "Gato"],
},
size: {
    type: String,
    required: true,
    enum: ["Mini", "Pequeño", "Mediano", "Grande", "Extra Grande"],
}

},
{
    timestamps: true
  }


);

const Pet = model("Pet", petSchema);

module.exports = Pet;