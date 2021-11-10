import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = () =>{
    const addUserHandler = (event) =>{
        event.preventDefault();

    }
    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label for="username">Username</label>
            <input id="username" type="text"/>
            <label for="age">Age (Years)</label>
            <input id="age" type="number"/>
            <button type= "submit">Submit</button>
        </form>
        </Card>
    )
}

export default AddUser;