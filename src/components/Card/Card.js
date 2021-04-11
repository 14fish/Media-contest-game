import React from 'react';
import './Card.scss'

class Card extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        const cardStyle = {
            backgroundColor: this.props.backgroundColor,
            borderColor: this.props.borderColor,
            color: this.props.color
        };

        return (
            <div className={cardStyle}>
                <div className={"card custom-card"}>
                    <div className={['name-tag name-tag-profile-page']}>
                        <span>Game</span>
                    </div>
                    <img src={require('../../assets/image/example.svg')} className="card-img" alt="..."/>
                    <div className={['share-tag share-profile-page']}>
                        <span>
                            <img src={require('../../assets/icon/share.svg')} className={'share-img'} alt="..."/>
                            <span className={'share-text'}>Share</span>
                            <span className={'share-count'}>2.555</span>
                        </span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Best soccer player</h5>
                        <p className="card-text">No bullshit. Nothing is that important.
                            Anakin-like.</p>
                    </div>
                    <div className={'row card-bottom'}>
                        <div className="col-md-3">
                            <img src={require('../../assets/icon/people-circle.svg')} className={'people-circle'}/>
                            <img src={require('../../assets/icon/people-battle.svg')} className={'people-battle'}/>
                            <span>1.325</span>
                        </div>
                        <div className="col-md-3">
                            <img src={require('../../assets/icon/swords-circle.svg')} className={'sword-circle'}/>
                            <img src={require('../../assets/icon/sword-battle.svg')} className={'sword-battle'}/>
                            <span>2.310</span>
                        </div>
                        <div className="col-md-3">
                            <span>21.453</span>
                            <img src={require('../../assets/icon/eye-circle.svg')} className={'view-circle'}/>
                            <img src={require('../../assets/icon/view-battle.svg')} className={'view-battle'}/>
                        </div>
                        <div className="col-md-3">

                            <span>51.541</span>
                            <img src={require('../../assets/icon/heart-circle.svg')} className={'like-circle'}/>
                            <img src={require('../../assets/icon/like-battle.svg')} className={'like-battle'}/>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Card;


