import React from 'react';
import './InnerLayout.scss';
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const inviteFriends = require('../../assets/icon/invite-friends.svg');
const hallOfFame = require('../../assets/icon/hall-of-fame.svg');
const profile = require('../../assets/icon/profile.svg');
const themes = require('../../assets/icon/themes.svg');
const howItWorks = require('../../assets/icon/question-mark.svg');
const signOut = require('../../assets/icon/sign-out.svg');
const collapse = require('../../assets/icon/close.svg');


class InnerLayout extends React.Component {
    render() {

        const dashboard = this.props.dashboard;
        const hallOfFamePage = this.props.hallOfFame;
        const profilePage = this.props.profilePage;
        const profileSecondPage = this.props.profileSecondPage;
        const editProfilePage = this.props.editProfilePage;
        const howItWorksPage = this.props.howItWorksPage;
        const photoContestPage = this.props.photoContestPage;

        let View;
        if (dashboard) {
            View = <div className={'w-100'}>
                {this.props.dashboard}
            </div>
        }
        if (hallOfFamePage) {
            View = <div className={'w-100'}>
                {this.props.hallOfFame}
            </div>
        }
        if (profilePage) {
            View = <div className={'w-100'}>
                {this.props.profilePage}
            </div>
        }
        if (profileSecondPage) {
            View = <div className={'w-100'}>
                {this.props.profileSecondPage}
            </div>
        }
        if (editProfilePage) {
            View = <div className={'w-100'}>
                {this.props.editProfilePage}
            </div>
        }
        if (howItWorksPage) {
            View = <div className={'w-100'}>
                {this.props.howItWorksPage}
            </div>
        }
        if (photoContestPage) {
            View = <div className={'w-100'}>
                {this.props.photoContestPage}
            </div>
        }

        return (
            <div className={'main-wrapper'}>
                <div className="collapse-menu">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className={'logo-collapse'}>
                                <Link to="/">
                                    <img className="menu-logo" src={require('../../assets/icon/logo-collapse.svg')}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className={"profile-area"}>
                                <div className={'container circle-progress'}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-3">
                        <div className="col mb-3">
                            <div className={"profile-level"}>
                                <div className={'row'}>
                                    <div className="profile-menu">
                                        <img src={require('../../assets/image/profile-bourgeois.svg')} alt=""/>
                                        <p className="profile-name">De Sainte Marie Etienne</p>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className={'top'}>
                                                <div className={'left'}>
                                                    <div className={'icon'}>
                                                        <img src={require('../../assets/icon/heart-profile.svg')} />
                                                    </div>
                                                    <div className={'text'}>
                                                        <span className={'like-count battle-text-menu'}>254</span>
                                                        <span className={'like-text battle-text-menu'}>Likes</span>
                                                    </div>
                                                </div>
                                                <div className={'right'}>
                                                    <div className={'text'}>
                                                        <span className={'coins-count battle-text-menu'}>15.720</span>
                                                        <span className={'coins-text battle-text-menu'}>Like Coins</span>
                                                    </div>
                                                    <div className={'icon'}>
                                                        <img src={require('../../assets/icon/republike-profile.svg')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'level'}><span className={'level-text'}>Level </span><span
                                                className={'level-number'}>15</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col mb-3">
                            <div className={"invite-friend-btn"}>
                                <Button backgroundColor={'#30C6C8'} borderColor={'#30C6C8'}
                                        placeholder={'Invite Friends'}
                                        icon={inviteFriends}></Button>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col mb-5">
                            <div className={"hall-of-fame-btn"}>
                                <Link to='/hall-of-fame'>
                                    <Button backgroundColor={'#2ADFB4'} borderColor={'#2ADFB4'}
                                        placeholder={'Hall Of Fame'} icon={hallOfFame}></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className={"profile-btn"}>
                                <Link className="ptofile-btn-menu" to='/profile'>
                                    <Button backgroundColor={'#EDF1F4'} borderColor={'#EDF1F4'} color={'#057A7F'}
                                        placeholder={'Profile'} icon={profile}></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className={"themes-btn"}>
                                <Link to='/choose-category'>
                                    <Button backgroundColor={'#EDF1F4'} borderColor={'#EDF1F4'} color={'#057A7F'}
                                        placeholder={'Themes'} icon={themes}></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col mb-5">
                            <div className={"how-it-works-btn"}>
                                <Link to='/how-it-works'>
                                    <Button backgroundColor={'#EDF1F4'} borderColor={'#EDF1F4'} color={'#057A7F'}
                                        placeholder={'How it Works?'} icon={howItWorks}></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col mt-3">
                            <div className={"sign-out-btn"}>
                                <Button backgroundColor={'#30C6C8'} borderColor={'#30C6C8'}
                                    placeholder={'Sign Out'} icon={signOut}></Button>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className={"collapse-btn"}>
                                <Button backgroundColor={'#EDF1F4'} borderColor={'#EDF1F4'} color={'#057A7F'}
                                    placeholder={'Collapse Menu'} icon={collapse}></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'header-bar'}>
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="text" className="form-control search-area"
                                    placeholder="Search by title, keyword, theme, user..." />
                                <div className="input-group-prepend">
                                    <span className={["input-group-text search-icon"]}><img
                                        src={require('../../assets/icon/search-gray.svg')} /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-settings mr-3"><img
                                src={require('../../assets/icon/settings.svg')} /></button>
                            <button type="button" className="btn btn-settings ml-3"><img
                                src={require('../../assets/icon/notification.svg')} /></button>
                        </div>
                    </div>
                </div>

                <div className={'content'}>
                    <div className={'row justify-content-center'}>
                        {View}
                    </div>
                </div>

            </div>);
    }
}

export default InnerLayout;
