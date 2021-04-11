import React, { Component } from "react";
import EditProfilePage from './EditProfilePage';
import InnerLayout from '../Layout/InnerLayout';

class EditProfile extends Component {
    render() {
        return <InnerLayout editProfilePage={<EditProfilePage />}></InnerLayout>;
    }
}

export default EditProfile;
