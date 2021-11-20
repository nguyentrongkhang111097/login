import Login from "../pages/login";
import React from "react"
import Link from 'next/link'

class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    };


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefaut();
    
    }
    handleRegister = event => {
        event.preventDefaut();
    }
    render() {
        return ( <form onSubmit = { this.handleSubmit } >
            <div><hi>Please Login Or Register To Continue </hi></div>
            <div > < input type = "Email"
            name = "Email"
            placeholder = "Email"
            onChange = { this.handleChange }
            />
            </div >
            < div > < input type = "Passwword"
            name = "Password"
            placeholder = "Password"
            onChange = { this.handleChange }
            />
            </div >
            <div>
            <button type = "submit" > Submit </button>
            <button type = "register" link hef ='/register' >Register</button>
            </div>
            </form>
        );
    }
}

export default LoginForm;