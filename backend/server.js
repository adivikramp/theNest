require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./utils/db");
const formRouter = require("./routers/formRoutes");
const userRouter = require("./routers/userRoutes");
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PATCH, DELETE, PUT ,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/forms", formRouter);
app.use("/api/users", userRouter);

connectDB().then(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
});
