import React from 'react';
import OutLayout from "../Layout/OutLayout";
import LoginForm from "./LoginForm";

class Login extends React.Component {
    render() {
        return (
            <div>
                <OutLayout login={<LoginForm/>}></OutLayout>
            </div>);
    }
}

export default Login;
