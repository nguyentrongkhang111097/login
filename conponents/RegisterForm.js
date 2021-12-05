import Register from "../pages/register";
import React from "react"
import { makeStyles } from "@material-ui/core";
import style from '../styles/jss/register'

const useStyle = makeStyles(style);

function RegisterForm() {
    const classes = useStyle();

    const handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    const handleRegister = event => {
        event.preventDefaut();
    }
    const handleCancel = event => {
        event.preventDefaut();
    }
    return (
        <div className = { classes.bodyform } >
            <form onRegister = { handleRegister } >
                <div className = { classes.header } >Register</div>   
                <div> 
                        <div>< input type = "Name"
                                name = "name"
                                placeholder = "name"
                                onChange = { handleChange }
                            />
                        </div>
                        <div>< input type = "phone"
                                name = "phone"
                                placeholder = "phone"
                                onChange = { handleChange }
                            />
                        </div>
                        <div><input type = "email"
                                name = "mail"
                                placeholder = "email"
                                onChange = { handleChange }
                            /> 
                        </div> 
                        <div><input type = "passwword"
                                name = "password"
                                placeholder = "password"
                                onChange = { handleChange }
                            />
                        </div>
                        <div><input type = "adress"
                                name = "adress"
                                placeholder = "adress"
                                onChange = { handleChange }
                            />
                        </div>
                    </div>
                    <div>
                        <button type = "register"> Register</button> 
                        <button type = "cancel"> Cancel </button>
                    </div>
            </form>
        </div>
    )
}

export default RegisterForm;