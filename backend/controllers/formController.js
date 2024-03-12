const Feedback = require("../models/feedbackModel");
const Order = require("../models/orderModel");
const User = require("../models/userModel");

// // Feedback Form
// const feedbackForm = async (req, res) => {
//   try {
//     const response = req.body;
//     await Feedback.create(response);
//     return res.status(200).json({ message: "Feedback given successfully" });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: "Feedback unsuccessful" });
//   }
// };

// // Order Form
// const orderForm = async (req, res) => {
//   try {
//     const response = req.body;
//     await Order.create(response);
//     return res.status(200).json({ message: "Order placed successfully" });
//   } catch (err) {
//     return res.status(500).json({ message: "Order could not be placed" });
//   }
// };

/* --------------------------------------------- Get user's orders --------------------------------------------- */
const getUserOrders = async (req, res) => {
  // Grab the authenticated user from request body
  const user = await User.findById(req.user._id);

  try {
    const userOrders = await Order.find({ user: user._id }).sort({
      createdAt: "desc",
    });
    res.status(200).json({ userOrders, email: user.email });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

/* --------------------------------------------- Get user's feedbacks --------------------------------------------- */
const getUserFeedback = async (req, res) => {
  // Grab the authenticated user from request body
  const user = await User.findById(req.user._id);

  try {
    const userFeedbacks = await Feedback.find({ user: user._id }).sort({
      createdAt: "desc",
    });
    res.status(200).json({ userFeedbacks, email: user.email });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

/* --------------------------------------------- Place new order --------------------------------------------- */
const orderForm = async (req, res) => {
  const { name, email, state, city, order } = req.body;

  // Check the fields are not empty
  if (!name || !email || !state || !city || !order) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Grab the authenticated user from request body
  const user = await User.findById(req.user._id);

  try {
    const placedOrder = await Order.create({
      name,
      email,
      state,
      city,
      order,
      user: user._id,
    });
    res.status(200).json({ msg: "Order placed successfully", placedOrder });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Order could not be placed" });
  }
};

/* --------------------------------------------- Place new feedback --------------------------------------------- */
const feedbackForm = async (req, res) => {
  const { name, email, state, city, productRating, deliveryRating } = req.body;

  // Check the fields are not empty
  if (!name || !email || !state || !city || !productRating || !deliveryRating) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Grab the authenticated user from request body
  const user = await User.findById(req.user._id);

  try {
    const placedFeedback = await Feedback.create({
      name,
      email,
      state,
      city,
      productRating,
      deliveryRating,
      user: user._id,
    });
    res.status(200).json({ msg: "Feedback given successfully", placedFeedback });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Feedback could not be placed" });
  }
};

module.exports = { orderForm, feedbackForm, getUserOrders, getUserFeedback };
