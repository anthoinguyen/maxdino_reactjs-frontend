import React, { Component } from 'react';
import './styles.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class ModalError extends Component {
    onClose = () => {
        this.props.onClose();
    }
    
    render() {
        const { errors, open } = this.props;
        if (errors) {
            var resultError = "";
            if (errors.error === true) {
                resultError = errors.errors.map((error, index) => {
                    let listError = "";
                    listError = (
                        <span key={index} >
                            {error.errorMessage}
                        </span>
                    );
                    return listError;
                });
            } else {
                resultError = (
                    <span >
                        {errors.message}
                    </span>
                );
            }
        }
        return (
            <div>
                <Modal
                    
                    show={open}
                    onHide={this.onClose}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    className="modal-error"
                >
                    <div className="modal-general">
                        <Modal.Header closeButton className="modal-error-header">
                            <Modal.Title>ERROR</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {resultError}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.onClose}>Close</Button>
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalError;
