const { Schema, model } = require("mongoose");

const feedbackSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  productRating: {
    type: String,
    default: "good",
  },
  deliveryRating: {
    type: String,
    defalut: "good",
  },
});

const Feedback = new model("feedback", feedbackSchema);

module.exports = Feedback;
