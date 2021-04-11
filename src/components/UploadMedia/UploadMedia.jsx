import React, { useEffect, useState } from "react";
import { Modal, ProgressBar, Form} from "react-bootstrap";
import "./UploadMedia.scss";

import $ from 'jquery';

const UploadMedia = props => {
    const [firstVideoProgress, setFirstVideoProgress] = useState({
        bar: 0,
        opacity: 0
    })

    const onClickProgessBar = () => {

        document.body.onfocus = () => { 
            let i = 0
            let interval = setInterval(() => {
                setFirstVideoProgress((prev)=> ({...firstVideoProgress, bar: prev.bar + 1}));
                i++;
    
                if (i == 100) {
                    clearInterval(interval);
                }
            }, 100);
        }
    }


    const onClickActiveState = (e) => {
        const { target } = e;        
        const type = $(target).attr('type')

        for (let item of $('.upload-media-item-container')) {
            const el = $(item)
            const type = el.find('img').attr('type')
            el.removeClass(`${type}-active upload-active`);
            
        }
        $(target).parent().addClass(`upload-active ${type}-active`);
    }


    let textInput = (
            <div className="upload-media-form-container">
                <form className="upload-media-form" className="" action="">
                    <div className="input-container">
                        <label htmlFor="" className="upload-form-number">
                            1
                        </label>
                        <input
                            type="text"
                            className="upload-media-input"
                            placeholder="Type your text here!"
                        />
                        <img src={require('../../assets/image/upload-a-video.svg')} alt="" className="img-video-upload"/>
                        <img src={require('../../assets/image/upload-youtube-link.svg')} alt="" className="youtube-link-upload"/>
                    </div>

                    <div className="input-container">
                        <label htmlFor="" className="upload-form-number">
                            1A
                        </label>
                        <input
                            type="text"
                            className="upload-media-input"
                            placeholder="Click here to upload a video"
                        />
                        <Form.File 
                            id="custom-file"
                            className="upload-video custom-file"
                            onClick={onClickProgessBar}
                            custom
                        />
                        <div
                            className="progress-bar-form first-file">
                            <ProgressBar animated now={firstVideoProgress.bar} />
                        </div>
                            <div className="progress-percentage">{firstVideoProgress.bar + " %"}</div>
                        <div className="upload-form-cancel-btn">X</div>
                    </div>

                    <div className="input-container">
                        <label htmlFor="" className="upload-form-number">
                            <img src={require('../../assets/icon/done.svg')} alt=""/>
                        </label>
                        <input
                            type="text"
                            className="upload-media-input pl-88"
                            placeholder="videoname.mp4"
                        />
                        <img src={require('../../assets/icon/cam-icon.svg')} alt="" className="upload-video-icon"/>
                        <div className="upload-form-cancel-btn upload-cancel">X</div>
                    </div>

                    <div className="input-container">
                        <label htmlFor="" className="upload-form-number">
                            <img src={require('../../assets/icon/done.svg')} alt=""/>
                        </label>
                        <input
                            type="text"
                            className="upload-media-input pl-88"
                            placeholder="https://youtu.be/kQcB8QpjfSo?list=RDkQcB8QpjfSo"
                        />
                        <img src={require('../../assets/icon/cam-icon.svg')} alt="" className="upload-video-icon"/>
                        <div className="upload-form-cancel-btn upload-cancel">X</div>
                    </div>

                    <div className="input-container">
                        <label htmlFor="" className="upload-form-number">
                            4
                        </label>
                        <input
                            type="text"
                            className="upload-media-input"
                        />
                        <Form.Group className="upload-dropdown"  controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom>
                                <option>Choose your theme</option>
                                <option>Theme 1</option>
                                <option>Theme 2</option>
                                <option>Theme 3</option>
                                <option>Theme 4</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div className="input-container">
                        <label htmlFor="" className="upload-form-number">
                            5
                        </label>
                        <input
                            type="text"
                            className="upload-media-input"
                            placeholder="Describe your battle (Optional)"
                        />
                    </div>

                    <div className="input-container">
                        <div className="upload-media-show-options">
                            Turn off describe options
                        </div>
                    </div>
                    <div className="input-container">
                        <button className="upload-media-btn" onClick={props.onHide} >
                            Launch Battle
                        </button>
                    </div>
                </form>
            </div>);


    // const onClickChangeForm = (e) => {
    //     const type = $(e.target).attr('type')
        
    //     switch (type) {
    //         case 'text':
    //             console.log("object");
    //             return textInput = (<div className="iner">
    //                 <form className="upload-media-form" className="" action="">
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">1</label>
    //                         <input type="text" className="upload-media-input" placeholder="Type your text here!"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">3</label>
    //                         <input type="text" className="upload-media-input" placeholder="Link (Optional)"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">2</label>
    //                         <input type="text" className="upload-media-input" placeholder="Choose your theme"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">3</label>
    //                         <input type="text" className="upload-media-input" placeholder="Give a name to your Battle"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">4</label>
    //                         <input type="text" className="upload-media-input" placeholder="Give a title to your content (Optional)"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">5</label>
    //                         <input type="text" className="upload-media-input" placeholder="Describe your battle (Optional)"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <div className="upload-media-show-options">
    //                             Turn off describe options
    //                         </div>
        
    //                     </div>
    //                     <div className="input-container">
    //                         <button className="upload-media-btn" onClick={props.onHide}>Launch Battle</button>
    //                     </div>
    //                 </form>
    //             </div>)
    //             break;
    //         case 'audio':
    //             console.log("cool audio");
    //             break;
    //         case 'video':
    //             console.log("cool video");
    //             break;
    //         case 'image':
    //             console.log("cool image");
    //             break;
        
    //         default:
    //             textInput = (<div className="upload-media-form-container">
    //                 <form className="upload-media-form" className="" action="">
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">1</label>
    //                         <input type="text" className="upload-media-input" placeholder="Type your text here!"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">1A</label>
    //                         <input type="text" className="upload-media-input" placeholder="Link (Optional)"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">2</label>
    //                         <input type="text" className="upload-media-input" placeholder="Choose your theme"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">3</label>
    //                         <input type="text" className="upload-media-input" placeholder="Give a name to your Battle"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">4</label>
    //                         <input type="text" className="upload-media-input" placeholder="Give a title to your content (Optional)"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <label htmlFor="" className="upload-form-number">5</label>
    //                         <input type="text" className="upload-media-input" placeholder="Describe your battle (Optional)"/>
    //                     </div>
        
    //                     <div className="input-container">
    //                         <div className="upload-media-show-options">
    //                             Turn off describe options
    //                         </div>
        
    //                     </div>
    //                     <div className="input-container">
    //                         <button className="upload-media-btn" onClick={props.onHide}>Launch Battle</button>
    //                     </div>
    //                 </form>
    //             </div>)
    //             break;
        // }
    // }


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="upload-media">
                <div className="upload-media-header">
                    <img src={require('../../assets/icon/sword-1.svg')} alt="" className="upload-media-sword"/>
                    <div className="upload-media-item">
                        <div 
                            onClick={(e) => {return (onClickActiveState(e))}} 
                            className="upload-media-item-container"
                        >
                            <img className="upload-media-item-text" type="text" src={require('../../assets/icon/upload-text.svg')} alt=""/>
                        </div>
                        <div 
                            onClick={(e) => {return (onClickActiveState(e))}} 
                            className="upload-media-item-container"
                        >
                            <img className="upload-media-item-audio" type="audio" src={require('../../assets/icon/upload-audio.svg')} alt=""/>
                        </div>
                        <div 
                            onClick={(e) => {return (onClickActiveState(e))}} 
                            className="upload-media-item-container"
                        >
                            <img className="upload-media-item-image" type="image" src={require('../../assets/icon/upload-image.svg')} alt=""/>
                        </div>
                        <div 
                            onClick={(e) => {return (onClickActiveState(e))}} 
                            className="upload-media-item-container  upload-active video-active"
                        >
                            <img className="upload-media-item-video" type="video" src={require('../../assets/icon/upload-video.svg')} alt=""/>
                        </div>
                    </div>
                    <img className="upload-media-sword" src={require('../../assets/icon/sword-2.svg')} alt=""/>
                </div>

                <p className="upload-media-title">Launch a Image Battle!</p>
            </div>
            {textInput}
        </Modal>
            );
};

export default UploadMedia;
