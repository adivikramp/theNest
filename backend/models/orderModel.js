const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
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
  order: {
    type: String,
    required: true,
  },
});

const Order = new model("order", orderSchema);

module.exports = Order;
