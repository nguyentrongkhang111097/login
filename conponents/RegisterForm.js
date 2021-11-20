import Register from "../pages/register";
import React from "react"
class RegisterForm extends React.Component {
    state = {
        id:'',
        name:'',
        email: '',
        password: '',
        phone:''
    };


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleRegister = event => {
        event.preventDefaut();
    }
    render() {
        return ( <form onRegister = { this.handleRegister } >
            <div><h1> Register </h1></div>
            <div > < input type = "name"
            name = "name"
            placeholder = "name"
            onChange = { this.handleChange }
            />
            </div >
            <div > < input type = "phone"
            name = "phone"
            placeholder = "phone"
            onChange = { this.handleChange }
            />
            </div >
            <div > < input type = "email"
            name = "mail"
            placeholder = "email"
            onChange = { this.handleChange }
            />
            </div >
            < div > < input type = "passwword"
            name = "password"
            placeholder = "password"
            onChange = { this.handleChange }
            />
            </div >
            <button type = "register">Register</button>
            </form>
        );
    }
}

export default RegisterForm;