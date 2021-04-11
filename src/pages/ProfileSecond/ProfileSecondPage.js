import React, { Component } from 'react';
import './ProfileSecondPage.scss';
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import ProgressBar from 'react-customizable-progressbar';
import $ from 'jquery';

export class ProfileSecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = { progressBar: 0 };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.increaseProgres.bind(this), 20);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    increaseProgres() {
        this.setState({
            progressBar: this.state.progressBar + 1
        });
        if (this.state.progressBar == 75) {
            clearInterval(this.intervalId);
        }
    }

    render() {

        const onClickSetNavItemActive = (e) => {
            const { target } = e
            for (let el of $('.profile-page-nav-items').children()) {
                if ($(el) !== $(target).parent()) {
                    $(el).removeClass("profile-page-nav-active");
                }
            }
            $(target).parent().addClass('profile-page-nav-active');
        }



        return (
            <div className="profile-page">
                <div className="profile-page--info">
                    <div className="profile-page--info-profile-pic">
                        <div className="profile-pic-custom">
                                <ProgressBar
                                    radius={59}
                                    progress={this.state.progressBar}
                                    fillColor="rgba(0,0,0,0)"
                                    counterClockwise
                                    strokeWidth={7}
                                    strokeColor="#21C3C5"
                                    trackStrokeWidth={6}
                                    trackStrokeColor="#c9ccd3"
                                    pointerRadius={NaN}
                                    steps={100}
                                    className="progress-bar-profile"
                                />
                                <img className="profile-pic-custom-pic pic-active" src={require('../../assets/image/profile-pic-active.svg')} alt=""/>
                                <label className="progress-percentage">75%</label>
                            </div>
                        <h1>De Sainte Marie Etienne</h1>
                        <span>No bullshit. Nothing is that important.</span>
                        <p>Anakin-like.</p>
                    </div>

                    <div className="profile-page--info-game-info">
                        <div className="profile-page-like-coins">
                            <div className="profile-page-like">
                                <div className="profile-page-like-icon">
                                    <img src={require('../../assets/icon/heart-profile.svg')} alt=""/>
                                </div>
                                <div className="profile-page-like-info">
                                    <p className="profile-page-like-info-number">254</p>
                                    <p className="profile-page-like-info-text">Likes</p>
                                </div>
                            </div>
                            <button className="profile-page-convert-coins">
                                Convert LikeCoins to Likes
                            </button>
                            <div className="profile-page-coins">
                                <div className="profile-page-coins-info">
                                    <p className="profile-page-coins-info-number">15.700</p>
                                    <p className="profile-page-coins-info-text">Like Coins</p>
                                </div>
                                <div className="profile-page-coins-icon">
                                    <img src={require('../../assets/icon/republike-profile.svg')} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="profile-page-level">
                            Level <b>15</b>
                        </div>

                        <div className="profile-page-loc-date">
                            <div className="profile-page-loc">
                                <div className="profile-page-loc-icon">
                                    <img src={require('../../assets/icon/loc-profile.svg')} alt=""/>
                                </div>
                                <div className="profile-page-loc-info">
                                    <p className="profile-page-loc-info-country">France</p>
                                    <p className="profile-page-loc-info-city">Paris</p>
                                </div>
                            </div>
                            <div className="profile-page-vertical-line"></div>
                            <div className="profile-page-date">
                                <div className="profile-page-date-info">
                                    <p className="profile-page-date-info-date">06/2018</p>
                                    <p className="profile-page-date-info-text">Joined since</p>
                                </div>
                                <div className="profile-page-date-icon">
                                    <img src={require('../../assets/icon/date-profile.svg')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <Link to="/edit-profile" className="profile-page-edit-settings">
                            <img src={require('../../assets/icon/edit-settings.svg')} alt=""/>
                            Edit Settings</Link>
                    </div>

                    <div className="profile-page--friend">
                        <div className="profile-page--friend--info">
                            <div className="profile-page--friend--info-friend">
                                <img src={require('../../assets/icon/friend-profile.svg')} alt=""/>
                                <div className="profile-page--friend--info-friend-text">Friends</div>
                                <div className="profile-page--friend--info-friend-number">25</div>
                            </div>
                            <div className="profile-page--friend--friend-request">
                                <button>Invite Friends</button>
                            </div>
                        </div>

                        <div className="profile-page--friend-friend-list">
                            <div className="friend-list-container">    
                                <img src={require('../../assets/image/friend-1.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-2.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-3.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-4.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-5.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-1.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-2.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-3.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-4.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-5.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-1.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-2.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-3.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-4.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-1.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-2.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-3.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                                <img src={require('../../assets/image/friend-4.svg')} alt="" className="profile-page--friend-friend-list-img"/>
                            </div>
                            <img src={require('../../assets/icon/friend-slider-btn.svg')} alt="" className="profile-page--friend-friend-list-img friend-slider-btn"/>
                        </div>
                    </div>
                </div>

                <div className="profile-page--info">
                    <div className='card-area'>
                            <div className="profile-page-nav">
                                <div className="profile-page-nav-items">
                                    <div onClick={(e)=>{onClickSetNavItemActive(e, this)}} className="profile-page-nav-items-link profile-page-nav-active">
                                        <Link to="#">Battles</Link>
                                        <div className="nav-item-count">18</div>
                                    </div>
                                    <div onClick={(e)=>{onClickSetNavItemActive(e, this)}} className="profile-page-nav-items-link">
                                        <Link to="#">Contents</Link>
                                        <div className="nav-item-count">24</div>
                                    </div>
                                    <div onClick={(e)=>{onClickSetNavItemActive(e, this)}} className="profile-page-nav-items-link">
                                        <Link to="#">Trophies</Link>
                                        <div className="nav-item-count">5</div>
                                    </div>
                                    <div onClick={(e)=>{onClickSetNavItemActive(e, this)}} className="profile-page-nav-items-link">
                                        <Link to="#">Favorites</Link>
                                        <div className="nav-item-count">1</div>
                                    </div>
                                </div>
                                <div className="profile-page-nav-line"></div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                                <div className="col-md-4">
                                    <Card/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ProfileSecondPage
