import React, { Component } from 'react';
import './styles.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class ModalDelete extends Component {
    onCancelDelete = () => {
        this.props.closeModalDelete();
    }
    onDeleteAsk = () => {
        this.props.closeModalDelete();
        this.props.argeeDelete();
    }
    render() {
        const { openModalDelete } = this.props;
        return (
            <div>
                <Modal
                    show={openModalDelete}
                    onHide={this.close}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    className="modal-delete"
                >
                    <Modal.Header closeButton  className="modal-delete-header">
                        <Modal.Title>DELETE</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        DELETE STATUS!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onCancelDelete}>cancel</Button>
                        <Button onClick={this.onDeleteAsk}>accept</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ModalDelete;
