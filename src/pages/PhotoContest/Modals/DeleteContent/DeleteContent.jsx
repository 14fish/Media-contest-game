import React from 'react';
import './DeleteContent.scss';
import { Modal, Button } from 'react-bootstrap';

export function DeleteContent(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="change-content-title" id="contained-modal-title-vcenter">
                    <img className="delete-danger" src={require('../../../../assets/icon/danger-battle.svg')} alt=""/>
                    <h1 className="delete-title" >Caution!</h1>
                    <img onClick={props.onHide} className="delete-cancel" src={require('../../../../assets/icon/cancel.svg')} alt=""/>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="delete-content">
                    <div className="delete-text">Do you want to delete this content?</div>
                    <div className="delete-content">"Night Lovell - Still Cold"?</div>
                    <div className="delete-content-warning">Warning, you will lose your earned likes!</div>
                </div>
                <Button className="notf-modal-save-btn delete-modal-btn" onClick={props.onHide}>
                    <img src={require('../../../../assets/icon/delete-icon.svg')} alt="" className="delete-icon"/>
                    Confirm
                </Button>
            </Modal.Body>
        </Modal>
    )
}

