import React, { Component } from 'react';
import './styles.css';
import { Modal } from 'react-bootstrap';

export class ModalImage extends Component {
    onClose = () => {
        this.props.onClose();
    }

    render() {
        const { open, img } = this.props;
        return (
            <div>
                <Modal
                    show={open}
                    onHide={this.onClose}
                    dialogClassName="modal-90w  modal-img"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <div className="modal-general">
                        <Modal.Body className="modal-img-body">
                            <div className="img-modal">
                                <img className="img-modal-show" src={img} alt="immage show" />
                            </div>
                        </Modal.Body>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalImage;
