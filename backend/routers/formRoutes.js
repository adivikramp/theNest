const express = require("express");
const formRouter = express.Router();
const {
  orderForm,
  feedbackForm,
  getUserFeedback,
  getUserOrders,
} = require("../controllers/formController");
const auth = require("../middlewares/authMiddleware");

// Get all user's orders
formRouter.get("/userOrders", auth, getUserOrders);

// Get all user's feedbacks
formRouter.get("/userFeedbacks", auth, getUserFeedback);

// Add Feedback form
formRouter.post("/feedback", auth, feedbackForm);

// Add Order form
formRouter.post("/order", auth, orderForm);

module.exports = formRouter;
