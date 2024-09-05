// 1. import dependencies 
import express from "express";
const app = express();

// 2. configure the app
app.use( express.json() ); // configuration to create

// 3. routes & logic
// temporary database so that it could act like a db, NOT REAL!!!
const users = [
    { firstName: "Reimu", lastName: "Hakurei", id:12344524 },
    { firstName: "Marisa", lastName: "Kirisame", id:2342345 },
    { firstName: "Sanae", lastName: "Kochiya", id:3453345 },
    { firstName: "Sakuya", lastName: "Izayoi", id:456456 },
    { firstName: "Momiji", lastName: "Inubashiri", id:35345 }
];   

app.get("/api/testing", (req, res)=>{
    res.json("Testing!!!!")
})
// GET ALL
app.get("/api/users" , (req, res)=>{
    res.json(users);
})

// GET ONE
app.get("/api/users/:id" , (req, res)=>{
    const getUserById = users.find(user => user.id == req.params.id);
    // always add in a console.log to see what is happening
    res.json(getUserById);
})

// CREATE
app.post("/api/users", (req, res)=>{
    users.push(req.body)
    res.json(users)
})

// PUT - update the whole object
// PATCH - update partial object
app.put("/api/users/:id", (req, res)=>{
    users.forEach((user, idx)=>{
        if(user.id == req.params.id){
            user = {...user, ...req.body}
            users[idx] = user
        } 
    })
    const updatedUser = users.find(user => user.id == req.params.id);
    res.json(updatedUser);
})

// DELETE
app.delete("/api/users/:id", (req, res)=>{
    // grab the id from params
    const userId = req.params.id;
    // find the idx of the target user
    const idx = users.findIndex(user=> user.id == userId);
    // remove that idx by splice
    users.splice(idx, 1);
    res.json(users);
})


// 4. listen to the port
const port = 8000;
app.listen(port, ()=>console.log(`Listening on port ${port}`))
