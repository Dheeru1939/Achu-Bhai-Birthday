// api/index.ts
import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from Vercel API" });
});

export default app;
