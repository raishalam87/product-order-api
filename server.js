const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config(); // Load .env

const app = express();
app.use(express.json()); // Body parser

connectDB(); // Connect MongoDB

// ✅ Add this route for the homepage
app.get("/", (req, res) => {
  res.send("🚀 Product API is running on Render!");
});

app.use("/api/orders", orderRoutes); // Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
