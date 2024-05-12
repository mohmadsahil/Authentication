import "./DB/Connections.js";
import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import router from "./Routes/userRoute.js";
const PORT=4000;

//Middlewares

app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET","POST","PUT", "DELETE", "PATCH"],
}));

app.use(bodyParser.json());

app.use("/",router);

app.listen(PORT,(req,res)=>{
    console.log(`App is Listening On Port ${PORT}`);
})
