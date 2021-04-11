import React from 'react';
import OutLayout from "../Layout/OutLayout";
import RegisterForm from "./RegisterForm";

class Register extends React.Component {
    render() {
        return (
            <div>
                <OutLayout register={<RegisterForm/>}></OutLayout>
            </div>);
    }
}

export default Register;
