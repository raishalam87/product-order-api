const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");
const cors = require("cors"); // ✅ Step 1: Import cors

dotenv.config(); // Load .env

const app = express();

// ✅ Step 2: Enable cors
app.use(cors());

// ✅ Step 3: Parse JSON bodies
app.use(express.json()); 

connectDB(); // Connect MongoDB

// ✅ Step 4: Default route for Render
app.get("/", (req, res) => {
  res.send("🚀 Product API is running on Render!");
});

app.use("/api/orders", orderRoutes); // Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
