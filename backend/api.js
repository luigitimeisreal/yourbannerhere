import express from "express";
import dotenv from "dotenv";
import checkingRoutes from "./routes/checkingRoutes.js"
import cors from "cors"

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());
app.use("/api", checkingRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running in port ${ PORT }`);  
})


