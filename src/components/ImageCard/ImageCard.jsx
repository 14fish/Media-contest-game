import React, { useState, useEffect } from 'react'
import './ImageCard.scss';
import $ from 'jquery';
import {ChangeTitle} from '../../pages/PhotoContest/Modals/ChangeTitle/ChangeTitle';
import {DeleteContent} from '../../pages/PhotoContest/Modals/DeleteContent/DeleteContent';


function ImageCard() {

    const [deleteModal, setDeleteModal] = useState(false);
    const [changeTitle, setChangeTitle] = useState(false);

    const onClikShowDetail = () => {
        $('.contest-card').toggleClass('resize-window');
    }

    return (
        <div className="contest-card resize-window">
            <img src={require('../../assets/image/photo-contest-img.png')} alt="" className="contest-card-img"/>
            <div className="contest-card-text">
                <div className="contest-card-text-left">
                    <p className="contest-card-text-left-title">Final de Blade Runner, pure poésie</p>
                    <div className="contest-card-text-left-desc">
                        <img src={require('../../assets/icon/eye.svg')} alt="" className="card-eye"/>
                        <span className="view-count">51.541</span>
                        <span className="desc">Post viewing</span>
                    </div>
                </div>
                <div className="contest-card-text-right">
                    <img src={require('../../assets/icon/heart-card.svg')} alt=""/>
                    <span className="like-count">51.541</span>
                </div>
            </div>
            <div onClick={onClikShowDetail} className="contest-card-detail-view-btn">Detail view</div>
            <div className="contest-card-detail-view">
                <div className="interactions">
                    <div className="report-post interactions-btn">
                        <img src={require('../../assets/icon/danger.svg')} alt=""/>
                        <span className="report-text">Report this post</span>
                    </div>
                    <div className="report-post interactions-btn">
                        <img src={require('../../assets/icon/fav.svg')} alt=""/>
                        <span className="fav-text">Add to favorite</span>
                    </div>
                    <div className="report-post interactions-btn">
                        <span className="share-count">2.545</span>
                        <img src={require('../../assets/icon/share.svg')} alt=""/>
                        <span className="share-text">Share</span>
                    </div>
                </div>
            </div>
            <div className="contest-card-owner">
                <img src={require('../../assets/image/owner-card-pic.svg')} alt="" className="owner-img"/>
                <span className="owner-name">MOHAMED EL ABDIOUI</span>
            </div>
            <div className="contest-card-line"></div>

            <div className="contest-card-comment">
                <div className="comment-owner-pic">
                    <img src={require('../../assets/image/comment-profile.svg')} alt=""/>
                </div>
                <div className="comment-owner-text">
                    <div className="comment-owner-text-pic">
                        <span className="owner-name">YUSUF KAYA</span>
                        <span className="date">10.01.2020</span>
                    </div>
                    <div className="comment">
                        Field to comment. Lorem ipsum dolor sit amed.
                    </div>
                </div>
            </div>

            <div className="contest-card-line"></div>

            <div className="contest-card-comment">
                <div className="comment-owner-pic">
                    <img src={require('../../assets/image/comment-people-2.svg')} alt=""/>
                </div>
                <div className="comment-owner-text">
                    <div className="comment-owner-text-pic">
                        <span className="owner-name">TUFAN GOK</span>
                        <span className="date">10.01.2020</span>
                    </div>
                    <div className="comment">
                        Field to comment. Lorem ipsum dolor sit amed.
                    </div>
                </div>
            </div>

            <div className="contest-card-line"></div>

            <div className="contest-card-leave-comment">
                <textarea placeholder="Leave comment here" className="comment-section" name=""></textarea>
            </div>
            
            <div className="contest-card-buttons">
                <button onClick={()=>setChangeTitle(true)} className="close-btn">close</button>
                <button onClick={()=>setDeleteModal(true)} className="send-comment-btn">send comment</button>
            </div>

            <ChangeTitle
                show={changeTitle}
                onHide={()=>setChangeTitle(false)}
            />
            <DeleteContent
                show={deleteModal}
                onHide={()=>setDeleteModal(false)}
            />
        </div>
    )
}

export default ImageCard
