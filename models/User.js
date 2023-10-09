const mongoose = require("mongoose");
const { hashPassword } = require("../utils");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  this.password = await hashPassword(this.password);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
