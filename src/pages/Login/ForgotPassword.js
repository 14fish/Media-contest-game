import React from 'react';
import OutLayout from "../Layout/OutLayout";
import ForgotPasswordForm from "./ForgotPasswordForm";

class ForgotPassword extends React.Component {
    render() {
        return (
            <div>
                <OutLayout forgotPassword={<ForgotPasswordForm/>}></OutLayout>
            </div>);
    }
}

export default ForgotPassword;
