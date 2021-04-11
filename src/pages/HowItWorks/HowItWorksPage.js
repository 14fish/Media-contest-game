import React, { Component } from 'react';
import './HowItWorksPage.scss';
import { Link } from 'react-router-dom';

export class HowItWorksPage extends Component {
    render() {
        return (
            <div className="profile-page">
                <div className="how-it-works">
                    <div className="how-it-works--header">
                        <h1 className="how-it-works--header-title">How it <b className="title-bold">Works?</b></h1>
                        <Link to="/profile-second"><img className="cancel-button" src={require('../../assets/icon/close-btn.svg')} alt=""/></Link> 
                    </div>

                    <div className="game-info">
                        <div className="game-info-card">
                            <div className="game-info-card-1">
                                <img src={require('../../assets/image/info-card-1.svg')} alt=""/>
                            </div>
                            <div className="game-info-card-2">
                                <img src={require('../../assets/image/info-card-2.svg')} alt=""/>
                            </div>
                            <div className="game-info-card-3">
                                <img src={require('../../assets/image/info-card-3.svg')} alt=""/>
                            </div>
                        </div>

                        <img src={require('../../assets/logo/laws.svg')} alt="" className="laws-of-game-logo"/>

                        <div className="rule-card">
                            <div className="rule-card-number">
                                <img src={require('../../assets/icon/rule-1.svg')} alt=""/>
                            </div>
                            <p className="rule-card--title">THE PURPOSE</p>

                            <p className="rule-card--detail">
                                <b>Republike</b>: most of the information is not in books. It is a polymorph living thing. We are the real time environment <br/>
                                for the best UGCs* giving the power back to users vs algorithms and sponsoring.
                            </p>

                            <p className="rule-card--detail">
                                <b>You</b>: Become a trustable citizen on your favorite topics and gain respectability and responsibility. <br/>
                                Cross the levels or Republike by posting the best content and discovering surprising ones .
                            </p>

                            <div className="rule-card--detail-side-note">*User generated content</div>
                        </div>

                        <div className="rule-card">
                            <div className="rule-card-number">
                                <img src={require('../../assets/icon/rule-2.svg')} alt=""/>
                            </div>
                            <p className="rule-card--title">CROSSING LEVELS</p>

                            <p className="rule-card--detail">
                                Levels are reached by accumulating “laurels”. Laurels are granted in 2 occurrences:
                            </p>

                            <p className="rule-card--detail detail-bold">
                                1) To the best content in each battle:
                            </p>

                            <div className="rule-card--awards">
                                <div className="rule-card--awards-gold">
                                    <img src={require('../../assets/icon/hall-of-fame-gold.svg')} alt="" className="rule-card--awards-gold-img"/>
                                    <p className="rule-card--awards--text-1">1st best voted:</p>
                                    <p className="rule-card--awards--text-2">9 laurels</p>
                                </div>
                                <div className="rule-card--awards-silver">
                                    <img src={require('../../assets/icon/hall-of-fame-silver.svg')} alt="" className="rule-card--awards-silver-img"/>
                                    <p className="rule-card--awards--text-1">1st best voted:</p>
                                    <p className="rule-card--awards--text-2">9 laurels</p>
                                </div>
                                <div className="rule-card--awards-bronze">
                                    <img src={require('../../assets/icon/hall-of-fame-bronze.svg')} alt="" className="rule-card--awards-bronze-img"/>
                                    <p className="rule-card--awards--text-1">1st best voted:</p>
                                    <p className="rule-card--awards--text-2">9 laurels</p>
                                </div>
                            </div>
                            <div className="rule-card--detail-side-note detail-bold">2) 1 laurel is grante d to each of the 100 first users who have voted for the winning content</div>
                        </div>

                        <div className="rule-card">
                            <div className="rule-card-number">
                                <img src={require('../../assets/icon/rule-3.svg')} alt=""/>
                            </div>
                            <p className="rule-card--title">THE VOTES</p>

                            <p className="rule-card--detail">*A battle ends when a content reaches [XXX?] likes (votes)</p>
                            <p className="rule-card--detail">Each user can vote any content up to 10 times.</p>
                            <p className="rule-card--detail">Voting power (stock of Likes) is limited. You can buy Likes with Aureus (See IV below).</p>
                            <p className="rule-card--detail"><b className="detail-bold">But careful</b>: Liking content of other citizens grants 10 Aureus (per vote) while liking ones own</p>
                            <p className="rule-card--detail">content costs 100 Aureus (per vote )</p>
                        </div>

                        <div className="rule-card">
                            <div className="rule-card-number">
                                <img src={require('../../assets/icon/rule-4.svg')} alt=""/>
                            </div>
                            <p className="rule-card--title">AUREUS, THE CURRENCY OF THE REPUBLIKE:</p>

                            <p className="rule-card--detail">“The currency of the Republike is Aureus”.</p>
                            <p className="rule-card--detail">“Voting power (stock of Likes) is limited. You have to refill your stock. It is possible thanks to Aureus”</p>
                            <p className="rule-card--detail">“1 Like costs 10 Aureus.”</p>
                            <p className="rule-card--detail">“You can accumulate Aureus by performing some actions and through the quality of your posts<b className="detail-bold">(see V below)</b>"</p>
                        </div>

                        <div className="rule-card">
                            <div className="rule-card-number">
                                <img src={require('../../assets/icon/rule-5.svg')} alt=""/>
                            </div>
                            <p className="rule-card--title">
                                <img className="title-coins" src={require('../../assets/icon/coins.svg')} alt=""/>
                                ACCUMULATE AUREUS
                            </p>

                            <div className="rule-card--coins">
                                <div className="rule-card--coins-card">
                                    <img className="rule-card--coins-card-canvas" src={require('../../assets/image/award-points.svg')} alt=""/>
                                    <div className="rule-card--coins-card-detail place">
                                        <h1 className="rule-card--coins-card-detail-number">10</h1>
                                        <h2 className="rule-card--coins-card-detail-title">Aureus</h2>
                                        <p className="rule-card--coins-card-detail-number-text">-1 like received from <br/>another citizen</p>
                                        <p className="rule-card--coins-card-detail-number-text">- 1 like given to another <br/> citizen’s content</p>
                                    </div>
                                </div>
                                <div className="rule-card--coins-card">
                                    <img className="rule-card--coins-card-canvas" src={require('../../assets/image/award-points.svg')} alt=""/>
                                    <div className="rule-card--coins-card-detail place">
                                        <h1 className="rule-card--coins-card-detail-number">50</h1>
                                        <h2 className="rule-card--coins-card-detail-title">Aureus</h2>
                                        <p className="rule-card--coins-card-detail-number-text">-1 like received from <br/>another citizen</p>
                                        <p className="rule-card--coins-card-detail-number-text">- 1 like given to another <br/> citizen’s content</p>
                                    </div>
                                </div>
                                <div className="rule-card--coins-card">
                                    <img className="rule-card--coins-card-canvas" src={require('../../assets/image/award-points.svg')} alt=""/>
                                    <div className="rule-card--coins-card-detail place">
                                        <h1 className="rule-card--coins-card-detail-number">100</h1>
                                        <h2 className="rule-card--coins-card-detail-title">Aureus</h2>
                                        <p className="rule-card--coins-card-detail-number-text">-1 like received from <br/>another citizen</p>
                                        <p className="rule-card--coins-card-detail-number-text">- 1 like given to another <br/> citizen’s content</p>
                                    </div>
                                </div>
                                <div className="rule-card--coins-card">
                                    <img className="rule-card--coins-card-canvas" src={require('../../assets/image/award-points.svg')} alt=""/>
                                    <div className="rule-card--coins-card-detail place">
                                        <h1 className="rule-card--coins-card-detail-number">200</h1>
                                        <h2 className="rule-card--coins-card-detail-title">Aureus</h2>
                                        <p className="rule-card--coins-card-detail-number-text">-1 like received from <br/>another citizen</p>
                                        <p className="rule-card--coins-card-detail-number-text">- 1 like given to another <br/> citizen’s content</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="levels">
                        <div className="level-logo">
                            <img src={require('../../assets/logo/levels.svg')} alt=""/>
                        </div>

                        <div className="levels-container">
                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-serf.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>Serf</p>
                                </div>
                                <div className="level-profile">
                                    <img src={require('../../assets/image/profile-serf.svg')} alt=""/>
                                </div>
                            </div>

                            
                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-apprentice.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>apprentice</p>
                                </div>
                                <div className="level-profile">
                                    <img src={require('../../assets/image/profile-apprentice.svg')} alt=""/>
                                </div>
                            </div>

                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-freeman.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>freeman</p>
                                </div>
                                <div className="level-profile">
                                    <img src={require('../../assets/image/profile-freeman.svg')} alt=""/>
                                </div>
                            </div>

                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-bourgeois.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>bourgeois</p>
                                </div>
                                <div className="level-profile">
                                    <img src={require('../../assets/image/profile-bourgeois.svg')} alt=""/>
                                </div>
                            </div>

                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-knight.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>knight</p>
                                </div>
                                <div className="level-profile">
                                    <img src={require('../../assets/image/profile-knight.svg')} alt=""/>
                                </div>
                            </div>

                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-consul.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>consul</p>
                                </div>
                                <div className="level-profile">
                                    <img src={require('../../assets/image/profile-consul.svg')} alt=""/>
                                </div>
                            </div>

                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-senator.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>senator</p>
                                </div>
                                <div className="level-profile">
                                    <img className="push-down-img-25" src={require('../../assets/image/profile-senator.svg')} alt=""/>
                                </div>
                            </div>

                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-chancellor.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>chancellor</p>
                                </div>
                                <div className="level-profile">
                                    <img className="push-down-img-25" src={require('../../assets/image/profile-chancellor.svg')} alt=""/>
                                </div>
                            </div>

                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-dictator.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>dictator</p>
                                </div>
                                <div className="level-profile">
                                    <img className="push-down-img-25" src={require('../../assets/image/profile-dictator.svg')} alt=""/>
                                </div>
                            </div>

                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-enlighted-dictator.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>enlighted dictator</p>
                                </div>
                                <div className="level-profile">
                                    <img className="enlight-dicator-img" src={require('../../assets/image/profile-enlighted-dictator.svg')} alt=""/>
                                </div>
                            </div>

                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-imperator.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>imperator</p>
                                </div>
                                <div className="level-profile">
                                    <img className="push-down-img-25" src={require('../../assets/image/profile-imperator.svg')} alt=""/>
                                </div>
                            </div>

                            <div className="level-card">
                                <div className="level-icon">
                                    <img src={require('../../assets/image/level-mystery.svg')} alt=""/>
                                </div>
                                <div className="level-text">
                                    <p>mystery</p>
                                </div>
                                <div className="level-profile">
                                    <img className="mystery-img" src={require('../../assets/image/profile-mystery.svg')} alt=""/>
                                </div>
                            </div>
                            
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default HowItWorksPage
