import React from 'react';
import './OutLayout.scss';


class OutLayout extends React.Component {
    render() {
        const login = this.props.login;
        const register = this.props.register;
        const forgotPassword = this.props.forgotPassword;
        let View;
        if (login) {
            View = <div className={'smallLogo'}><img src={require('../../assets/logo/small-logo.png')}
                                                     alt={'logo'}/>
                {this.props.login}
            </div>
        }
        if (register) {
            View = <div className={'smallLogo'}><img src={require('../../assets/logo/small-logo.png')} alt={'logo'}/>
                {this.props.register}
            </div>
        }
        if (forgotPassword) {
            View = <div className={'smallLogo'}><img src={require('../../assets/logo/small-logo.png')} alt={'logo'}/>
                {this.props.forgotPassword}
            </div>
        }
        return (
            <div className={'auth-wrapper'}>
                <div className={'outBox'}>
                    {View}
                </div>
                <div className={'infoBox'}>

                    <div className={'bigLogo'}><img src={require('../../assets/logo/logo.png')} alt={'logo1'}/></div>
                    <div className={'textArea'}>
                        <div className={'textAreaFirst'}>
                            <span className={'first'}>Prove that you hold</span><br/>
                            <span className={'second'}>the best content in the world</span>
                        </div>
                        <div className={'textAreaSecond'}>
                            <span>Battles of content, all categories, all formats</span>
                        </div>
                    </div>
                    <div className="boxArea">
                        <div className={'row'}>
                            <div className={'col-3'}>
                                <div className={'box'}>
                                    <div className={'card'}>
                                        <div className="boxIcon">
                                            <img src={require('../../assets/icon/search.svg')} alt={'search'}></img>
                                        </div>
                                        <div className="boxTitle">
                                            <span>SEARCH</span>
                                        </div>
                                        <div className="boxDescription">
                                            <span>Find amazing content</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-3'}>
                                <div className={'box'}>
                                    <div className={'card'}>
                                        <div className="boxIcon">
                                            <img src={require('../../assets/icon/surface.svg')} alt={'surface'}></img>
                                        </div>
                                        <div className="boxTitle">
                                            <span>CHALLENGE</span>
                                        </div>
                                        <div className="boxDescription">
                                            <span>Confront them to <br/> those of others</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-3'}>
                                <div className={'box'}>
                                    <div className={'card'}>
                                        <div className="boxIcon">
                                            <img src={require('../../assets/icon/heart.svg')} alt={'heart'}></img>
                                        </div>
                                        <div className="boxTitle">
                                            <span>VOTE</span>
                                        </div>
                                        <div className="boxDescription">
                                            <span>Make the best win</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-3'}>
                                <div className={'box'}>
                                    <div className={'card'}>
                                        <div className="boxIcon">
                                            <img src={require('../../assets/icon/award.svg')} alt={'award'}></img>
                                        </div>
                                        <div className="boxTitle">
                                            <span>PROGRESS</span>
                                        </div>
                                        <div className="boxDescription">
                                            <span>Win battles <br/> and cross levels</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'copyright'}>© 2020 - Republike</div>
                </div>
                <div className={'clearfix'}></div>
            </div>
        );
    }
}

export default OutLayout;
