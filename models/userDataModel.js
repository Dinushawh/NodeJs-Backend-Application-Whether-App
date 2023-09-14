const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const whetheDataScheme = new Schema({
  email: { type: String },
  location: { type: String },
  whetherData: { type: String },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("userwhetherdata", whetheDataScheme);
