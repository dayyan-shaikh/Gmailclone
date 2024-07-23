import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.routes.js";
import emailRoute from "./routes/email.routes.js";

dotenv.config({});
connectDB();
const PORT = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

app.use("/api/v1/user",userRoute);
app.use("/api/v1/user",emailRoute);

app.listen(PORT, () => {
  console.log(`Serving running at ${PORT}`);
});

// mongodb+srv://dayyanshaikh973:s51UtFTSiODEjuDh@cluster0.3ofdsud.mongodb.net/
