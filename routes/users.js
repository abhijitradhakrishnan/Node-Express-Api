import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
    // {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 25
    // },
    // {
    //     firstName: "Jane",
    //     lastName: "Doe",
    //     age: 24
    // }
]

// 1st Route 
// all routes in here are starting with '/users'
router.get('/', ( req, res ) => {
    // console.log(users);
    res.send(users);
});

// 2nd Route
// functionality of adding the users to our data base
router.post('/', (req, res) =>{

    // console.log(req.body);
    const user = req.body;
    // console.log(user)

    // Creating and adding unique id using uuid to the user
    // const userId = uuidv4();
    // const userWithId = { ...user, id: userId }

    // users.push(user);
    // users.push(userWithId);
    users.push({ ...user, id: uuidv4() });

    res.send(`user with the name ${user.firstName} added to the database!`)
});

// 3rd Route 
// Finding user with the help of id
router.get('/:id', ( req, res ) =>{
    const { id } = req.params;

    // Finding user from the database
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

// 4th route
router.delete('/:id', ( req, res ) =>{
    
});

export default router;