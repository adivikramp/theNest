const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* --------------------------------------------- Creating JWT --------------------------------------------- */
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "10d" });
};

/* --------------------------------------------- Register User --------------------------------------------- */
const registerUser = async (req, res) => {
  // Grab data from request body
  const { email, password } = req.body;

  // Check that fields are not empty
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are req." });
  }

  // Check if email is already registered
  const exist = await User.findOne({ email });
  if (exist) {
    return res.status(400).json({ error: "Email already registered" });
  }

  // Hash the password
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    // Registering the user
    const user = await User.create({ email, password: hashPassword });
    // Creating the web token
    const token = createToken(user._id);
    // Send the response
    return res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
  }
};

/* --------------------------------------------- Login User --------------------------------------------- */
const loginUser = async (req, res) => {
  // Grab data from body
  const { email, password } = req.body;

  // Check that fields are not empty
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are req." });
  }

  // Check if email is already registered
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Email not registered" });
  }

  // Check password
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(400).json({ error: "Incorrect password" });
  }

  try {
    // Creating the web token
    const token = createToken(user._id);
    // Send the response
    return res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser, loginUser };
