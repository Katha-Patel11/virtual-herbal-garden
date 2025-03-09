import dotenv from "dotenv";
import {app } from "./app.js"
import connectDB from "./database/database.js";

dotenv.config({
    path:"./.env",
});

connectDB()
    .then(()=>{
        app.listen(process.env.PORT);
        console.log(`Server is running on port ${process.env.PORT}`);
    })

    .catch((err)=>{
        console.log("Mongo error:"+err)
    });