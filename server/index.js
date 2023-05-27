import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

// User A&A is working at backend, frontend on the way.
// Bcrypt used for hashing, JWT used for token and session creating.

const app = express();

app.use(bodyParser.json({limit: "30mb", extend: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extend: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = "mongodb+srv://socialmediaapp:socialmediaapp@mediaapp.d1exkzt.mongodb.net/";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=> console.log(`Server Running on PORT: https://localhost:${PORT}`)))
    .catch((error)=> console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
