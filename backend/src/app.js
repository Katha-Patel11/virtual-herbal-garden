import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/user.route.js";

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/herbalcure", router);

export { app };
