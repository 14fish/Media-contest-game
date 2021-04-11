import React from 'react';
import InnerLayout from "../Layout/InnerLayout";
import ProfilePage from './ProfilePage';

class Profile extends React.Component {
    render() {
        return (
            <InnerLayout profilePage={<ProfilePage/>}></InnerLayout>
        );
    }
}

export default Profile;
