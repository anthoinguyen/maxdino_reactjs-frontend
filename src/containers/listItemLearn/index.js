import React from "react";
import { compose, bindActionCreators } from "redux";
import ItemLearn from "./../../components/itemLearn";
import ModalError from "./../../components/modal/modalError";
import { connect } from 'react-redux';
import * as listItemLearnAction from './actions';
import * as commonAction from "./../signin/actions";
import ModalImage from "./../../components/modal/modalImg";

import "./styles.css";

class ListItemLearn extends React.Component {

    componentDidMount() {
        this.props.listItemLearnActionCreators.setFetchingData();
        this.props.listItemLearnActionCreators.getLearns();
        window.addEventListener('scroll', this.loadOnScroll);
    }

    loadOnScroll = (e) => {
        if (this.props.lazyLoading.isFetched) return;
        var el = document.getElementById('content-end');
        var rect = el.getBoundingClientRect();
        var isAtEnd = (
            rect.bottom - 1 <= (window.innerHeight || document.documentElement.clientHeight)
        );
        if (isAtEnd) {
            if (!this.props.lazyLoading.isFetching) {

                this.props.listItemLearnActionCreators.setFetchingData();
                this.props.listItemLearnActionCreators.getLearns();

            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.loadOnScroll);
    }

    onClose = () => {
        this.props.listItemLearnActionCreators.closeModalError();
    };

    onPushLogin = () => {
        this.props.commonActionCreators.pushLogin();
    };

    onCloseModalImg = () => {
        this.props.listItemLearnActionCreators.closeModalImage();
    }

    openModalImg = () => {
        this.props.listItemLearnActionCreators.openModalImage();
    }

    setLinkImage = (link) => {
        this.props.listItemLearnActionCreators.setLinkImage(link);
    }

    render() {
        const { open, errors, learns, lazyLoading, getIdLearn, openModalImage, linkImage } = this.props;
        return (
            <div>
                <ModalError
                    errors={errors}
                    open={open}
                    onClose={this.onClose}
                    pushLogin={this.onPushLogin}
                />
                <ModalImage
                    open={openModalImage}
                    onClose={this.onCloseModalImg}
                    img={linkImage}
                />
                {
                    learns.map((learn, index) => {
                        return <ItemLearn setImage={link => this.setLinkImage(link)} openModalImg={this.openModalImg} overFlowText="overflow-content" getIdLearn={getIdLearn} key={index} learn={learn} />
                    })
                }
                {
                    !lazyLoading.isFetched ?
                        <div id="content-end" className="loading-list-learn">
                            <img className="img-loading-learn" src={process.env.PUBLIC_URL + "/images/loading.gif"} alt="loading learn list" />
                        </div> : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        learns: state.listItemLearn.learns,
        open: state.listItemLearn.open,
        errors: state.listItemLearn.errors,
        lazyLoading: state.listItemLearn.lazyLoading,
        signin: state.signin,
        openModalImage: state.listItemLearn.openModalImage,
        linkImage: state.listItemLearn.linkImage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        listItemLearnActionCreators: bindActionCreators(listItemLearnAction, dispatch),
        commonActionCreators: bindActionCreators(commonAction, dispatch),
    }
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withConnect)(ListItemLearn);
