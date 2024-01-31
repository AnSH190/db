const mongoose = require("mongoose");

const userSchema = new Mongoose.schema({
  username: String,
  email: String,
  password: String,
});

export default userSchema;
