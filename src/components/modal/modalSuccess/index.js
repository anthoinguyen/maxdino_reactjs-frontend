import React, { Component } from 'react';
import './styles.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class ModalSuccess extends Component {
    onClose = () => {
        this.props.onClose();
    }
    
    render() {
        const { contentSuccess, open } = this.props;
    
        return (
            <div>
                <Modal
                    show={open}
                    onHide={this.onClose}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    className="modal-success"
                >
                    <div className="modal-general">
                        <Modal.Header closeButton className="modal-success-header">
                            <Modal.Title>SUCCESS</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {contentSuccess}
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

export default ModalSuccess;
