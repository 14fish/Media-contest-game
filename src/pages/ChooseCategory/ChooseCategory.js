import React, { Component } from "react";
import './ChooseCategory.scss';
import Image from 'react-bootstrap/Image';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { NotificationSettings } from './NotificationSettings/NotificationSettings';

class ChooseCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {modalWindow: false};
    }


    render() {

        const onClickAddActive = (e) => {
            const { target } = e;
            const element = $(target).parent()

            if (!$(target).parent().hasClass('empty')) {
                
                $(element.children()[1]).toggleClass('category-active');

                if ($(element.parent().children()[1]).is('p')) {
                    $(element.parent().children()[1]).toggleClass('category-active-text');
                }
                if (element.hasClass('category-img-container')) {
                    $(element.parent().children()[0]).toggleClass('category-active-border');
                }
            }
        }


        return (
            <div className="choose-category">
                <div className="choose-category--top">
                    <div className="option-dots">
                        <Image src={require('../../assets/icon/dots.svg')}/>
                    </div>
                    <div className="lang-switch">
                        <Image src={require('../../assets/icon/lang-switch.svg')}/>
                    </div>
                </div>

                <div className="choose-category--main">
                    <div className="choose-category--main-logo">
                        <Image src={require('../../assets/logo/logo.png')} />
                    </div>
                    <div className="choose-category--main-title">See the stuff you love!</div>
                    <div className="choose-category--main-desc">Choose your favorite category (5 minimum)</div>

                    <div className="choose-category--main-content">
                        <div onClick={(e) => onClickAddActive(e, this)} className="grid-row">
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image src={require('../../assets/category/Category-Amour.png')} />
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Animal.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1144.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1145.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1146.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1147.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1148.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1149.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1150.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                        </div>
                        <div onClick={(e) => onClickAddActive(e, this)} className="grid-row">
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1151.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1152.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1153.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1154.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1155.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1156.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1157.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1158.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1159.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                        </div>
                        <div onClick={(e) => onClickAddActive(e, this)} className="grid-row">
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1160.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1161.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1162.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1163.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1164.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1165.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1167.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container">
                                    <Image  src={require('../../assets/category/Category-Rectangle 1168.png')}/>
                                    <div></div>
                                </div>
                                    <p>Lorem</p>
                            </div>
                            <div className="category-img">
                                <div className="category-img-container empty">
                                    <Image className="w-100 h-100"  src={require('../../assets/category/Category-empty.png')}/>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="choose-category--buttons">
                        <button 
                            className="category-notification-setting cat-btn"
                            onClick={() => (this.setState({modalWindow: true}))}
                        >
                            Notification Settings
                        </button>
                        <Link to='/main'><button className="category-play cat-btn">Play</button></Link>
                    </div>


                    <div className="choose-category--copyright">
                        &copy; 2020 - Republike
                    </div>

                    <NotificationSettings
                        show={this.state.modalWindow}
                        onHide={() => this.setState({modalWindow: false})}
                    />
                </div>
            </div>
        );
    }
}

export default ChooseCategory;
