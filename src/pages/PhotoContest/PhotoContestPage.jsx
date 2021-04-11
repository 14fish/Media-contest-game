import React, { Component } from "react";
import './PhotoContestPage.scss';
import $ from 'jquery';
import UploadMedia from '../../components/UploadMedia/UploadMedia';
import ImageCard from '../../components/ImageCard/ImageCard';

class PhotoContestPage extends Component {
    constructor(props){
        super(props)
        this.state = { 
            modalWindow: false,
            deleteModal: false,
            changeModal: false,
        }
        this.onClickMediaModal = this.onClickMediaModal.bind(this);
    }

    componentDidMount() {
        $(() => {
            $('[data-toggle="tooltip"]').tooltip();
        });
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



    componentDidUpdate() {
        if (this.state.modalWindow === false) {
            // Battle mode
            $('.profile-page').addClass('profile-page-battle');
            $('.at-the-battle-contest').css('display', 'block');
            $('.danger-cancel').css('display', 'block');
            $('.close-btn').addClass('close-btn-danger');
            $('.active-link-btn').addClass('active-link-battle');

            $('.people-battle').css('display', 'inline-block')
            $('.people-battle').css('transform', 'translateX(16px)')

            $('.sword-battle').css('display', 'inline-block')
            $('.sword-battle').css('transform', 'translateX(16px)')

            $('.view-battle').css('display', 'inline-block')
            $('.view-battle').css('transform', 'translateX(-16px)')

            $('.like-battle').css('display', 'inline-block')
            $('.like-battle').css('transform', 'translateX(-17px)')

            $('.battle-text-menu').addClass('menu-text-battle')
            $('.level').addClass('level-active');
            $('.card-text').addClass('card-text-battle');
            $('.invite-friend-btn').addClass('invite-friends-battle');
            $('.hall-of-fame-btn').addClass('hall-of-fame-battle');
            $('.ptofile-btn-menu').addClass('profile-btn-battle');
            $('.themes-btn').addClass('themes-btn-battle');
            $('.how-it-works-btn').addClass('how-it-works-btn-battle');
        }
    }

    onClickCancelBattle() {
        $('.card-text').removeClass('card-text-battle');
        $('.profile-page').removeClass('profile-page-battle');
        $('.at-the-battle-contest').css('display', 'none');
        $('.danger-cancel').css('display', 'none');
        $('.description').removeClass('description-battle');
        $('.nav-link-active').removeClass('nav-item-battle');
        $('.active-link-btn').removeClass('active-link-battle');
        $('.people-battle').css('display', 'none');
        $('.sword-battle').css('display', 'none');
        $('.view-battle').css('display', 'none');
        $('.like-battle').css('display', 'none');
        $('.battle-text-menu').removeClass('menu-text-battle')
        $('.invite-friend-btn').removeClass('invite-friends-battle');
        $('.hall-of-fame-btn').removeClass('hall-of-fame-battle');
        $('.ptofile-btn-menu').removeClass('profile-btn-battle');
        $('.themes-btn').removeClass('themes-btn-battle');
        $('.how-it-works-btn').removeClass('how-it-works-btn-battle');
        $('.close-btn').removeClass('close-btn-danger');
    }



    render() {
        return (
            <div className={"profile-page"}>
                <div className="at-the-battle-contest">
                    <img
                        src={require("../../assets/icon/danger-battle.svg")}
                        alt=""
                        className="danger-img"
                    />
                    <span className="dashbord-battle-text">
                        You are at battle!
                    </span>
                </div>
                <div className="photo-contest-container dashboard-content">
                    <div className="header">
                        <img
                            className="header-pic"
                            src={require("../../assets/image/header-photo-contest.svg")}
                            alt=""
                        />
                        <div
                            className={
                                "row card-bottom photo-contest-interactions"
                            }
                        >
                            <div className="col-md-3">
                                <img
                                    src={require("../../assets/icon/people-circle.svg")}
                                    className={"people-circle"}
                                />
                                <img
                                    src={require("../../assets/icon/people-battle.svg")}
                                    className={"people-battle"}
                                />
                                <span>1.325</span>
                            </div>
                            <div className="col-md-3">
                                <img
                                    src={require("../../assets/icon/swords-circle.svg")}
                                    className={"sword-circle"}
                                />
                                <img
                                    src={require("../../assets/icon/sword-battle.svg")}
                                    className={"sword-battle"}
                                />
                                <span>2.310</span>
                            </div>
                            <div className="col-md-3">
                                <span>21.453</span>
                                <img
                                    src={require("../../assets/icon/eye-circle.svg")}
                                    className={"view-circle"}
                                />
                                <img
                                    src={require("../../assets/icon/view-battle.svg")}
                                    className={"view-battle"}
                                />
                            </div>
                            <div className="col-md-3">
                                <span>51.541</span>
                                <img
                                    src={require("../../assets/icon/heart-circle.svg")}
                                    className={"like-circle"}
                                />
                                <img
                                    src={require("../../assets/icon/like-battle.svg")}
                                    className={"like-battle"}
                                />
                            </div>
                        </div>

                        <img
                            className="photo-contest-info-pic"
                            src={require("../../assets/image/photo-contest-info-pic.svg")}
                            alt=""
                        />
                    </div>

                    <div className={"title"}>
                        <span className={"title-first photo-contest-title"}>
                            Mythical scenes from movies
                        </span>
                        <br />
                        <span className={"description photo-contest-desc"}>
                            Pour pleurer de bonheur, de tristesse, d'espoir ou
                            tout simplement subjugués
                        </span>
                    </div>

                    <div className="dashboard-wrapper">
                        <div
                            className={"launch-choose-area"}
                            style={{ display: "none" }}
                        >
                            <div className={"row justify-content-center"}>
                                <span className={"description"}>
                                    Share a video, photo, audio or text...
                                </span>
                            </div>
                            <div className={"row justify-content-center"}>
                                <div className="col-md-1">
                                    <small>Text</small>
                                    <button
                                        type="button"
                                        className="btn launch-choose-btn"
                                    >
                                        <img
                                            src={require("../../assets/icon/launch-text.svg")}
                                            className={""}
                                        />
                                    </button>
                                </div>
                                <div className="col-md-1">
                                    <small>Audio</small>
                                    <button
                                        type="button"
                                        className="btn launch-choose-btn"
                                    >
                                        <img
                                            src={require("../../assets/icon/launch-audio.svg")}
                                            className={""}
                                        />
                                    </button>
                                </div>
                                <div className={"launch-btn-wrapper"}>
                                    <div
                                        onClick={this.onLaunchCancelButton}
                                        className={"btn-wrapper"}
                                    >
                                        <button
                                            type="button"
                                            className="btn launch-exit-btn"
                                        >
                                            <img
                                                src={require("../../assets/icon/launch-circle-exit.svg")}
                                                className={""}
                                            />
                                            <img
                                                onClick={
                                                    this.onClickCancelBattle
                                                }
                                                src={require("../../assets/icon/danger-cancel.svg")}
                                                alt=""
                                                className="danger-cancel"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <small>Image</small>
                                    <button
                                        type="button"
                                        className="btn launch-choose-btn"
                                    >
                                        <img
                                            src={require("../../assets/icon/launch-image.svg")}
                                            className={""}
                                        />
                                    </button>
                                </div>
                                <div className="col-md-1">
                                    <small>Video</small>
                                    <button
                                        type="button"
                                        className="btn launch-choose-btn"
                                    >
                                        <img
                                            src={require("../../assets/icon/launch-video.svg")}
                                            className={""}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={"launch-btn-area"}>
                            <div className={"row justify-content-center"}>
                                <div className={"launch-btn-wrapper"}>
                                    <div className={"btn-wrapper"}>
                                        <button
                                            type="button"
                                            className={"btn launch-btn"}
                                            data-container={".launch-btn-area"}
                                            data-toggle={"tooltip"}
                                            data-placement={"left"}
                                            title={"Launch a bottle!"}
                                            onClick={() => {
                                                this.onLaunchButton();
                                                this.onClickMediaModal();
                                            }}
                                        >
                                            <img
                                                src={require("../../assets/icon/swords.svg")}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="post-contest-content">
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
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
        );
    }
}

export default PhotoContestPage;
