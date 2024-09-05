// 1. import dependencies 
import express from "express";
// import router from "./routes/user.routes.js";
import router from "./routes/user2.routes.js";
const app = express();


// 2. configure the app
app.use( express.json() ); // configuration to create
app.use("/api", router);



// 4. listen to the port -- must be at the end
const port = 8000;
app.listen(port, ()=>console.log(`Listening on port ${port}`))
