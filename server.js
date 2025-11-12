// server.js
import express from "express";

const app = express();

// middleware
app.use(express.json());

// env variables
const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || "Default Message";

// GET route — home
app.get("/", (req, res) => {
  res.json({ success: true, message });
});

// GET route — about
app.get("/about", (req, res) => {
  res.json({ success: true, info: "This is the About route 🧠" });
});

// example GET with query params
app.get("/greet", (req, res) => {
  const name = req.query.name || "Guest";
  res.json({ message: `Hello, ${name}! 👋` });
});

// start server
app.listen(port, () => {
  console.log(`🚀 Express server running at http://localhost:${port}`);
});
