import users from "../models/user.model.js"

const UserController ={
    getAllUser : (req, res) =>{
        res.json(users);
    },
    createUser : (req, res)=>{
        users.push(req.body)
        res.json(users)
    },
    getOneUser : (req, res)=>{
        const getUserById = users.find(user => user.id == req.params.id);
        // always add in a console.log to see what is happening
        res.json(getUserById);
    },
    updateUser : (req, res)=>{
        users.forEach((user, idx)=>{
            if(user.id == req.params.id){
                user = {...user, ...req.body}
                users[idx] = user
            } 
        })
        const updatedUser = users.find(user => user.id == req.params.id);
        res.json(updatedUser);
    },
    deleteUser : (req, res) =>{
         // grab the id from params
         const userId = req.params.id;
         // find the idx of the target user
         const idx = users.findIndex(user=> user.id == userId);
         // remove that idx by splice
         users.splice(idx, 1);
         res.json(users);
    }
}

export default UserController