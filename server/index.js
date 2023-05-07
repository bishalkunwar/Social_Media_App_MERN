import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({limit: "30mb", extend: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extend: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://socialmediaapp:socialmediaapp@mediaapp.d1exkzt.mongodb.net/test";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=> console.log(`Server Running on PORT: https://localhost:${PORT}`)))
.catch((error)=> console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
