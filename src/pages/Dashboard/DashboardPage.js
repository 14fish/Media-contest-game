import React from 'react';
import './Dashboard.scss';
import Card from "../../components/Card/Card";
import $ from 'jquery';
import UploadMedia from '../../components/UploadMedia/UploadMedia';

class DashboardPage extends React.Component {
    constructor(props){
        super(props)
        this.state = { modalWindow: false}
        this.onClickMediaModal = this.onClickMediaModal.bind(this);
    }

    componentDidMount() {
        $(() => {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }

    componentDidUpdate() {
        if (this.state.modalWindow === false) {
            // Battle mode
            $('.dashboard-wrapper').addClass('dashboard-wrapper--battle');
            $('.you-are-at-battle').css('display', 'block');
            $('.you-are-at-battle').css('display', 'block');
            $('.danger-cancel').css('display', 'block');
            $('.description').addClass('description-battle');
            $('.nav-link-active').addClass('nav-item-battle');
            $('.card-text').addClass('card-text');
            $('.active-link-btn').addClass('active-link-battle');
            $('.people-battle').css('display', 'inline-block')
            $('.sword-battle').css('display', 'inline-block')
            $('.view-battle').css('display', 'inline-block')
            $('.like-battle').css('display', 'inline-block')
            $('.battle-text-menu').addClass('menu-text-battle')
            $('.level').addClass('level-active');
            $('.card-text').addClass('card-text-battle');
            $('.invite-friend-btn').addClass('invite-friends-battle');
            $('.hall-of-fame-btn').addClass('hall-of-fame-battle');
            $('.ptofile-btn-menu').addClass('profile-btn-battle');
            $('.themes-btn').addClass('themes-btn-battle');
            $('.how-it-works-btn').addClass('how-it-works-btn-battle');
            // console.log($('.themes-btn'));
        }
    }

    onClickCancelBattle() {
        $('.card-text').removeClass('card-text-battle');
        $('.dashboard-wrapper').removeClass('dashboard-wrapper--battle');
        $('.you-are-at-battle').css('display', 'none');
        $('.you-are-at-battle').css('display', 'none');
        $('.danger-cancel').css('display', 'none');
        $('.description').removeClass('description-battle');
        $('.nav-link-active').removeClass('nav-item-battle');
        $('.active-link-btn').removeClass('active-link-battle');
        $('.people-battle').css('display', 'none');
        $('.sword-battle').css('display', 'none');
        $('.view-battle').css('display', 'none');
        $('.like-battle').css('display', 'none');
        $('.battle-text-menu').removeClass('menu-text-battle')
        $('.level').removeClass('level-active');
        $('.card-text').removeClass('card-text-battle');
        $('.invite-friend-btn').removeClass('invite-friends-battle');
        $('.hall-of-fame-btn').removeClass('hall-of-fame-battle');
        $('.ptofile-btn-menu').removeClass('profile-btn-battle');
        $('.themes-btn').removeClass('themes-btn-battle');
        $('.how-it-works-btn').removeClass('how-it-works-btn-battle');
    }

    onLaunchButton() {
        $('.launch-btn-area').fadeOut('fast');
        $('.launch-choose-area').fadeIn('fast');

    }

    onLaunchCancelButton() {
        $('.launch-choose-area').fadeOut('fast');
        $('.launch-btn-area').fadeIn('fast');
    }

    onClickMediaModal() {
        this.setState({modalWindow: true});
    }


    render() {
        return (
            <div className={'dashboard-content'}>
                <div className={'title'}>
                    <span className={'title-first'}>Prove that you hold</span><span className={'title-second'}> the best content in the world</span><br/>
                    <span className={'description'}>Battles of content, all categories, all formats</span>
                </div>
                <div className={'container dashboard-wrapper'}>
                    <div className="you-are-at-battle">
                        <img src={require('../../assets/icon/danger.svg')} alt="" className="danger-img"/>
                        <span className="dashbord-battle-text">You are at battle!</span>
                    </div>
                    <div className={'launch-choose-area'} style={{display: 'none'}}>
                        <div className={'row justify-content-center'}>
                            <span className={'description'}>Share a video, photo, audio or text...</span>
                        </div>
                        <div className={'row justify-content-center'}>
                            <div className="col-md-1">
                                <small>Text</small>
                                <button type="button" className="btn launch-choose-btn">
                                    <img
                                        src={require('../../assets/icon/launch-text.svg')} className={''}/>
                                </button>

                            </div>
                            <div className="col-md-1">
                                <small>Audio</small>
                                <button type="button" className="btn launch-choose-btn">
                                    <img src={require('../../assets/icon/launch-audio.svg')} className={''}/>
                                </button>
                            </div>
                            <div className={'launch-btn-wrapper'}>
                                <div onClick={this.onLaunchCancelButton} className={'btn-wrapper'}>
                                    <button type="button" className="btn launch-exit-btn"><img
                                        src={require('../../assets/icon/launch-circle-exit.svg')} className={''}
                                        />
                                        <img onClick={this.onClickCancelBattle} src={require('../../assets/icon/danger-cancel.svg')} alt="" className="danger-cancel"/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <small>Image</small>
                                <button type="button" className="btn launch-choose-btn">
                                    <img
                                        src={require('../../assets/icon/launch-image.svg')} className={''}/>
                                </button>

                            </div>
                            <div className="col-md-1">
                                <small>Video</small>
                                <button type="button" className="btn launch-choose-btn">
                                    <img
                                        src={require('../../assets/icon/launch-video.svg')} className={''}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'launch-btn-area'}>
                        <div className={'row justify-content-center'}>
                            <div className={'launch-btn-wrapper'}>
                                <div className={'btn-wrapper'}>
                                    <button type="button" className={"btn launch-btn"}
                                            data-container={".launch-btn-area"} data-toggle={"tooltip"}
                                            data-placement={"left"} title={"Launch a bottle!"}
                                            onClick={()=> {this.onLaunchButton(); this.onClickMediaModal();}
                                        }
                                    >
                                    <img
                                        src={require('../../assets/icon/swords.svg')}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'card-area'}>
                        <ul className="nav nav-tabs">
                            <li className="nav-item ">
                                <a className="nav-link nav-link-active active" href="#">Suggested Battles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Most Popular Battles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Friends battles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Most recent battles</a>
                            </li>
                            <li className="nav-item active-link">
                                <a className="nav-link active-link-btn" href="#">Most recent battles</a>
                            </li>
                        </ul>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                            <div className="col-md-4">
                                <Card></Card>
                            </div>
                        </div>
                    </div>
                    <UploadMedia
                        show={this.state.modalWindow}
                        onHide={(e) => {
                            e.preventDefault();
                            this.setState({modalWindow: false})
                        }}
                    />
                </div>
            </div>);
    }
}

export default DashboardPage;
