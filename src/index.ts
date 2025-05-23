import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import apartmentRoutes from "./routes/apartmentRoutes";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://apartmentsApp:zizozizo99@cluster0.lm2miuj.mongodb.net/"; //mongodb://apartmentsApp:zizozizo99@cluster0-shard-00-00.xxxxx.mongodb.net:27017,cluster0-shard-00-01.xxxxx.mongodb.net:27017,cluster0-shard-00-02.xxxxx.mongodb.net:27017/apartmentdb?ssl=true&replicaSet=atlas-xxxxxx-shard-0&authSource=admin&retryWrites=true&w=majority

app.use(cors());
app.use(express.json());
app.use("/apartments", apartmentRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Mongo connection failed", err));
