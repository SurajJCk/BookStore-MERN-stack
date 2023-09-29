import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import booksRoute from "./routes/booksRoute.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const app = express();

//Middleware for parshing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//Option 1: Allow all the origind with default of CORS
app.use(cors());

// OPTION 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: "http://localhost:3001",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("This is a Bookstore MERN App");
});
app.use("/books", booksRoute);

mongoose
  .connect(process.env.VITE_MONGODB_URL)
  .then(() => {
    console.log("App connected to Database");
    app.listen(process.env.VITE_PORT, () => {
      console.log(`App is listening to port: ${process.env.VITE_PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
