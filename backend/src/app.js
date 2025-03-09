import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/user.route.js'

const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use("/herbalcure" , router);

export { app }