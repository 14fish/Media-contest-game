import React, { Component } from "react";
import "./EditProfilePage.scss";
import { Link } from 'react-router-dom';

class EditProfilePage extends Component {
    render() {
        return (
            <div className="profile-page"> 
                <div className="profile-page--info">
                        <img src={require('../../assets/image/upload-photo.svg')} alt="" className="edit-upload-img"/>
                        <p className="edit-title">You are editing your profile</p>
                    <form className="edit-page-form">
                        <div className="edit-form">
                            <div className="edit-form-name-surname">
                                <input className="edit-input edit-name mr-20 pl-10" type="text" placeholder="Your name"/>
                                <input className="edit-input mr-20 pl-10" type="mail" name="" id="" placeholder="Enter your email addreess"/>
                            </div>
                            <div className="edit-form-gender">
                                <button className="edit-input edit-btn-gender-male gender-active mr-10">Male</button>
                                <button className="edit-input edit-btn-gender-male mr-10">Female</button>
                                <button className="edit-input edit-btn-gender-male ">Other</button>
                            </div>
                        </div>
                        <div className="edit-form-date-city">
                            <span className="birth-date-text">Birth date</span>
                            <input className="edit-input edit-date" type="text" placeholder="18.08.1993"/>
                            <span className="country-text">Country</span>
                            <input className="edit-input" type="text" name="" id="" placeholder="Turkey,Istanbul"/>
                        </div>
                        <div className="edit-form-bio">
                            <textarea className="edit-input edit-bio" name="" id=""  placeholder="Bio"/>
                        </div>
                        <button className="edit-form-submit" type="submit">Save</button>
                    </form>
                </div>
                <div className="profile-page--info">
                    <p className="edit-page-form-password-text">Change Password</p>
                    <form action="" className="edit-page-form-password">
                        <input className="edit-input" type="password" name="" id="" placeholder="Password (min 8 characters)"/>
                        <input className="edit-input" type="password" name="" id="" placeholder="Password again"/>
                        <button type="submit" className="edit-form-password">Change</button>
                    </form>
                </div>
                <div className="profile-page--info">
                    <div className="delete-account">
                        <h1 className="delete-account-title">Delete My Account</h1>
                        <p className="delete-account-text">If you delete your account, nobody will anymore be able to see your battles, <br/> content or other information on your Republike profile.</p>
                        <button className="delete-account-btn">Delete Account</button>
                    </div>
                </div>
                <Link to="#" className="profile-page-edit-settings editing">
                    <img src={require('../../assets/icon/edit-settings.svg')} alt=""/>
                    Editing</Link>
            </div>
        )
    }
}

export default EditProfilePage;