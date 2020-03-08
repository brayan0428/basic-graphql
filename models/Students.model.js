const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var studentSchema = new Schema({ name: String, email: String });

module.exports = mongoose.model("students", studentSchema);
