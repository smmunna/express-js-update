Perfect 😎 — Express.js makes handling GET (and any other) requests much simpler.
And since Node v24.8.0 now supports `.env` and auto-reload natively, you can combine those new features with Express easily.

Let’s do it step-by-step 👇

---

### 🧩 Step 1: Create a simple Express project

If you haven’t already, in your project folder run:

```bash
npm install express
```

---

### 🧾 Step 2: Your `.env` file

```bash
# .env
PORT=5000
MESSAGE="Hello from Express + Node 24! 🚀"
```

---

### ⚙️ Step 3: Your `server.js`

```js
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
```

> ⚠️ If you’re using `"type": "module"` in your `package.json`, `import` works.
> Otherwise, use `const express = require("express");` and remove `import` syntax.

---

### 🧠 Step 4: Add scripts in `package.json`

```json
"scripts": {
  "dev": "node --env-file=.env --watch server.js",
  "start": "node --env-file=.env server.js"
}
```

---

### ▶️ Step 5: Run the app

```bash
npm run dev
```

✅ Output:

```
🚀 Express server running at http://localhost:5000
```

---

### 🌐 Step 6: Test routes

| Route               | Example URL                                                                      | Result                                                           |
| ------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `/`                 | [http://localhost:5000/](http://localhost:5000/)                                 | `{ success: true, message: "Hello from Express + Node 24! 🚀" }` |
| `/about`            | [http://localhost:5000/about](http://localhost:5000/about)                       | `{ success: true, info: "This is the About route 🧠" }`          |
| `/greet?name=Munna` | [http://localhost:5000/greet?name=Munna](http://localhost:5000/greet?name=Munna) | `{ message: "Hello, Munna! 👋" }`                                |

---

### ✅ Result

You now have:

* `.env` loading **without dotenv**
* Auto reload **without nodemon**
* Express.js with **GET routes**
* Modern, clean setup 🎯

---
