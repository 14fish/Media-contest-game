import React from 'react';
import InnerLayout from "../Layout/InnerLayout";
import ProfileSecondPage from './ProfileSecondPage';

class ProfileSecond extends React.Component {
    render() {
        return (
            <InnerLayout profileSecondPage={<ProfileSecondPage/>}></InnerLayout>
        );
    }
}

export default ProfileSecond;
