import type { Request, Response } from "express";
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("CrickIQ API is running 🏏");
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
