import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);
mongoose.connect("mongodb+srv://avishivamg:wk9NQ7qZV0s8AJ82@cluster0.bjxiryo.mongodb.net/Blog?retryWrites=true&w=majority"
)
.then(()=> app.listen(5000))
.then(()=>console.log("Connected TO Database and Listening To Localhost 5000"))
.catch((err) => console.log(err));

//wk9NQ7qZV0s8AJ82