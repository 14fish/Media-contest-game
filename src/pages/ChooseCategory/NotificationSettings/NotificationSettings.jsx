import React from 'react';
import './NotificationSettings.scss';
import { Modal, Button } from 'react-bootstrap';

export function NotificationSettings(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title className="modal-notification" id="contained-modal-title-vcenter">
                <div className="modal-title--text">Notification & E-mail Setting</div>

                <div className="modal-title--switch">

                    <label className="notf-modal-label">Notification</label>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notification'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='notification'>
                            {" "}
                        </label>
                    </div>

                    <label className="notf-modal-label">E-mail</label>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='email'>
                            {" "}
                        </label>
                    </div>

                </div>
            </Modal.Title>
        </Modal.Header>


        <Modal.Body>
            <div className="notf-modal-content">
                <div className="notf-modal-content-left">
                    <div className="notf-modal-content--title">New friends battles</div>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notf-newFriends'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='notf-newFriends'>
                            {" "}
                        </label>
                    </div>
                </div>
                <div className="notf-modal-content-right">
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email-newFriends'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='email-newFriends'>
                            {" "}
                        </label>
                    </div>
                </div>
            </div>
            <div className="notf-modal-content">
                <div className="notf-modal-content-left">
                    <div className="notf-modal-content--title">New content posted</div>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notf-newContent'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='notf-newContent'>
                            {" "}
                        </label>
                    </div>
                </div>
                <div className="notf-modal-content-right">
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email-newContent'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='email-newContent'>
                            {" "}
                        </label>
                    </div>
                </div>
            </div>
            <div className="notf-modal-content">
                <div className="notf-modal-content-left">
                    <div className="notf-modal-content--title">Friend request</div>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notf-friendRequest'
                        />
                        <label className='custom-control-label' htmlFor='notf-friendRequest'>
                            {" "}
                        </label>
                    </div>
                </div>
                <div className="notf-modal-content-right">
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email-friendRequest'
                        />
                        <label className='custom-control-label' htmlFor='email-friendRequest'>
                            {" "}
                        </label>
                    </div>
                </div>
            </div>
            <div className="notf-modal-content">
                <div className="notf-modal-content-left">
                    <div className="notf-modal-content--title">Friend request accepted</div>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notf-friendRequestAccepted'
                        />
                        <label className='custom-control-label' htmlFor='notf-friendRequestAccepted'>
                            {" "}
                        </label>
                    </div>
                </div>
                <div className="notf-modal-content-right">
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email-friendRequestAccepted'
                        />
                        <label className='custom-control-label' htmlFor='email-friendRequestAccepted'>
                            {" "}
                        </label>
                    </div>
                </div>
            </div>
            <div className="notf-modal-content">
                <div className="notf-modal-content-left">
                    <div className="notf-modal-content--title">Share - Invite friends to discover a battle</div>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notf-discoverBattle'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='notf-discoverBattle'>
                            {" "}
                        </label>
                    </div>
                </div>
                <div className="notf-modal-content-right">
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email-discoverBattle'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='email-discoverBattle'>
                            {" "}
                        </label>
                    </div>
                </div>
            </div>
            <div className="notf-modal-content">
                <div className="notf-modal-content-left">
                    <div className="notf-modal-content--title">Share - Invite friends to discover a content</div>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notf-discoverContent'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='notf-discoverContent'>
                            {" "}
                        </label>
                    </div>
                </div>
                <div className="notf-modal-content-right">
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email-discoverContent'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='email-discoverContent'>
                            {" "}
                        </label>
                    </div>
                </div>
            </div>
            <div className="notf-modal-content">
                <div className="notf-modal-content-left">
                    <div className="notf-modal-content--title">Content overtaken</div>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notf-contentOvertaken'
                        />
                        <label className='custom-control-label' htmlFor='notf-contentOvertaken'>
                            {" "}
                        </label>
                    </div>
                </div>
                <div className="notf-modal-content-right">
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email-contentOvertaken'
                        />
                        <label className='custom-control-label' htmlFor='email-contentOvertaken'>
                            {" "}
                        </label>
                    </div>
                </div>
            </div>
            <div className="notf-modal-content">
                <div className="notf-modal-content-left">
                    <div className="notf-modal-content--title">Grade</div>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notf-grade'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='notf-grade'>
                            {" "}
                        </label>
                    </div>
                </div>
                <div className="notf-modal-content-right">
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email-grade'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='email-grade'>
                            {" "}
                        </label>
                    </div>
                </div>
            </div>
            <div className="notf-modal-content">
                <div className="notf-modal-content-left">
                    <div className="notf-modal-content--title">Suggested battles</div>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notf-suggestedBattle'
                        />
                        <label className='custom-control-label' htmlFor='notf-suggestedBattle'>
                            {" "}
                        </label>
                    </div>
                </div>
                <div className="notf-modal-content-right">
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email-suggestedBattle'
                        />
                        <label className='custom-control-label' htmlFor='email-suggestedBattle'>
                            {" "}
                        </label>
                    </div>
                </div>
            </div>
            <div className="notf-modal-content">
                <div className="notf-modal-content-left">
                    <div className="notf-modal-content--title">E-mail settings 1</div>
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='notf-emailSettings'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='notf-emailSettings'>
                            {" "}
                        </label>
                    </div>
                </div>
                <div className="notf-modal-content-right">
                    <div className='custom-control custom-switch'>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='email-emailSettings'
                            defaultChecked
                        />
                        <label className='custom-control-label' htmlFor='email-emailSettings'>
                            {" "}
                        </label>
                    </div>
                </div>
            </div>
            <Button className="notf-modal-save-btn" onClick={props.onHide}>Save and Close</Button>
        </Modal.Body>
        </Modal>
    )
}

