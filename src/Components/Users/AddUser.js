import React,{ useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = () =>{
    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');

    const usernameChangedHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }

    const ageChangedHandler = (event) =>{
        setEnteredAge(event.target.value);
    }
    const addUserHandler = (event) =>{
        event.preventDefault();
        const userData = {
            username : enteredUsername,
            age : enteredAge
        }

        console.log(userData);

    }
    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label for="username">Username</label>
            <input id="username" type="text" onChange={usernameChangedHandler}/>
            <label for="age">Age (Years)</label>
            <input id="age" type="number" onChange={ageChangedHandler}/>
            <Button type= "submit">Add User</Button>
        </form>
        </Card>
    )
}

export default AddUser;