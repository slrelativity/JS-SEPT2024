// 1. import all dependencies
import express from 'express';
import cors from 'cors';
import router from "./routes/job.routes.js"
import dbConnect from './configs/mongoose.config.js';
const app = express()


// 2. config express
app.use(express.json(), cors())
// app.use(express.urlencoded({ extended: true }));
dbConnect();

// 3. run the routes
app.use("/api", router)

//4. RUN YOUR EXPRESS SERVER **
app.listen(8000, () => console.log(`Listening on port: 8000`) );