import React, { Component } from 'react';
import SectionFeed from './../../sectionFeed';
import { Modal } from 'react-bootstrap';
import ItemLearn from "./../../itemLearn";
import "./styles.css";

export class ModalSearch extends Component {

    // closeModal = () => {
    //     this.props.onCloseModal();
    // }

    render() {
        const { open, asks, learns, sumResultLearn, sumResultAsk, loadingSearch } = this.props;
        return (
            <div>
                <Modal
                    autoFocus={false}
                    show={open}
                    // onHide={this.closeModal}
                    dialogClassName="modal-90w modal-search"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <div className="modal-header-search d-flex align-items-center">
                        <span className="modal-header-icon icon-question-circle"></span>
                        <span className="modal-header-icon-text">Ask</span>
                        <span className="modal-header-result ml-auto">{sumResultAsk} Results</span>
                    </div>
                    <div className="modal-content-search">
                        {
                            asks.length > 0 && asks !== undefined ?
                                (
                                    asks.map((ask, index) => {
                                        return (
                                            <SectionFeed
                                                // onLikeAsk={this.onLikeAsk}
                                                // addComment={this.addComment}
                                                // getComment={this.getComment}
                                                // openModalDelete={this.openModalDelete}
                                                disable={false}
                                                post={ask}
                                                key={index}
                                                editMargin="add-margin-search"
                                            />
                                        );
                                    })
                                )
                                : loadingSearch ?
                                    <div className="loading-search"><img className="img-loading-search" src={process.env.PUBLIC_URL + '/images/loading-search.gif'} alt="img-search" /></div>
                                    : <div className="nothing-to-show d-flex justify-content-center">Nothing</div>
                        }
                    </div>

                    <div className="modal-header-search d-flex align-items-center">
                        <span className="modal-header-icon icon-add"></span>
                        <span className="modal-header-icon-text">Learn</span>
                        <span className="modal-header-result ml-auto">{sumResultLearn} Results</span>
                    </div>
                    <div className="modal-content-search">
                        {
                            learns.length > 0 && learns !== undefined ?
                                learns.map((learn, index) => {
                                    return (
                                        <ItemLearn
                                            key={index}
                                            learn={learn}
                                            editSearchLearn={`editLearnFirst` + index}
                                        />
                                    );
                                })
                                : loadingSearch ?
                                    <div className="loading-search"><img className="img-loading-search" src={process.env.PUBLIC_URL + '/images/loading-search.gif'} alt="img-search" /></div>
                                    : <div className="nothing-to-show d-flex justify-content-center">Nothing</div>
                        }
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalSearch;
