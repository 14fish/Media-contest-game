import React from 'react';
import './HallOfFame.scss';


class HallOfFamePage extends React.Component {

    render() {
        return (
            <div className={'hall-of-fame-content'}>
                <div className={'title-area'}>
                    <span className={'title'}>Hall Of Fame</span><br/>
                    <span className={'title-top'}>Battles of content, all categories, all formats</span>
                </div>
                <div className={'list-wrapper'}>
                    <div className={'list-head-wrapper'}>
                        <div className={'row list-head align-items-center'}>
                            <div className="col-md-1 head-sharp">#</div>
                            <div className="col-md-3 head-name">CITIZENS</div>
                            <div className="col-md-2"> POINTS</div>
                            <div className="col-md-2"><img src={require('../../assets/icon/hall-of-fame-gold.svg')}/>
                            </div>
                            <div className="col-md-2"><img src={require('../../assets/icon/hall-of-fame-silver.svg')}/>
                            </div>
                            <div className="col-md-2"><img src={require('../../assets/icon/hall-of-fame-bronze.svg')}/>
                            </div>
                        </div>
                    </div>

                    <div className={'list'}>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>1</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>2</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>3</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>4</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>5</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>6</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>7</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>8</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>9</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>10</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                        <div className={'row item'}>
                            <div className="col-md-1 list-id"><span>11</span></div>
                            <div className="col-md-3 name">
                                <img className={'thumbnail'}
                                     src={require('../../assets/image/hall-thumbnail.svg')}></img>Santa Marina
                            </div>
                            <div className="col-md-2 points">2324545</div>
                            <div className="col-md-2 gold">52545</div>
                            <div className="col-md-2 silver">53545</div>
                            <div className="col-md-2 bronze">53545</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HallOfFamePage;

