const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
type: String,
required: true
    },
   username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
    type: String,
    required: true,
    minlength: 8
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: Number,
    unique: true,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  car: [{
    type: Schema.Types.ObjectId,
    ref: 'Car'
  }],
  pet: [{
    type: Schema.Types.ObjectId,
    ref: 'Pet'
  }],



});

const User = model("User", userSchema);

module.exports = User;
