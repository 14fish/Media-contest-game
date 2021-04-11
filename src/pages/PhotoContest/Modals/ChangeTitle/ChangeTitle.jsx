import React from 'react';
import './ChangeTitle.scss';
import { Modal, Button } from 'react-bootstrap';

export function ChangeTitle(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="change-content-title" id="contained-modal-title-vcenter">
                    <img className="change-danger" src={require('../../../../assets/icon/danger-battle.svg')} alt=""/>
                    <h1 className="change-title" >Changing title!</h1>
                    <img onClick={props.onHide} className="change-cancel" src={require('../../../../assets/icon/cancel.svg')} alt=""/>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="change-content">
                    <div className="change-text">Edit or enter your title, #keywords (optional)</div>
                    <input placeholder="Night Lovell - Still Cold" type="text" className="change-content-input"/>
                </div>
                <Button className="notf-modal-save-btn change-modal-btn" onClick={props.onHide}>
                    Validate
                </Button>
            </Modal.Body>
        </Modal>
    )
}

