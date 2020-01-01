import React from "react";
import { compose, bindActionCreators } from "redux";
import ItemLearn from "./../../components/itemLearn";
import RecommendCommunities from './../../components/recommendCommunites';
import SectionListLearn from "./../../components/sectionListLearn";
import SectionVideo from './../../components/sectionVideo';
import ModalVideo from "./../../components/modal/modalVideo";
import ModalError from "./../../components/modal/modalError";
import { connect } from 'react-redux';
import * as learnDetailPageAction from './actions';
import * as commonAction from "./../signin/actions";
import ModalImage from "./../../components/modal/modalImg";
import * as getNewFeedAction from "./../askPage/actions";

import "./styles.css";


class learnDetailPage extends React.Component {

    componentWillMount() {

        if (!localStorage.getItem("jwtToken")) {
            if (!sessionStorage.getItem('jwtToken')) {
                this.props.history.push("/signin");
            }
        }
        this.props.learnDetailPageActionCreators.setIdLearn(this.props.match.params.id);
        this.props.learnDetailPageActionCreators.getLearnDetail();
        this.props.learnDetailPageActionCreators.getVideo();
        this.props.getAskPageCreators.getProfile();
    }

    onClose = () => {
        this.props.learnDetailPageActionCreators.closeModalError();
    };

    onPushLogin = () => {
        this.props.commonActionCreators.pushLogin();
    };

    openModalVideo = (link) => {
        this.props.learnDetailPageActionCreators.openModalVideo(link);
    };

    closeModalVideo = () => {
        this.props.learnDetailPageActionCreators.closeModalVideo();
    };

    getIdLearn = (id) => {
        this.props.learnDetailPageActionCreators.setIdLearn(id);
        this.props.learnDetailPageActionCreators.getLearnDetail();
    }

    onCloseModalImg = () => {
        this.props.learnDetailPageActionCreators.closeModalImage();
    }

    openModalImg = () => {
        this.props.learnDetailPageActionCreators.openModalImage();
    }

    setLinkImage = (link) => {
        this.props.learnDetailPageActionCreators.setLinkImage(link);
    }

    render() {
        if (localStorage.getItem("jwtToken") || window.sessionStorage.getItem('jwtToken')) {
            this.props.signin.isSignInSuccess = true;
        }
        else {
            this.props.signin.isSignInSuccess = false;
        }
        const { openModalImage, linkImage, open, errors, sectionVideos, openVideo, linkVideo, learnDetail, isLoadsectionVideos, isLoadingLearnDetail } = this.props;
        return (
            <div>
                <RecommendCommunities />
                <ModalError
                    errors={errors}
                    open={open}
                    onClose={this.onClose}
                    pushLogin={this.onPushLogin}
                />

                <ModalVideo
                    linkVideo={linkVideo}
                    open={openVideo}
                    onCloseModal={this.closeModalVideo}
                />

                <ModalImage
                    open={openModalImage}
                    onClose={this.onCloseModalImg}
                    img={linkImage}
                />

                <div className="container learn-page-view-large">
                    <div className="row">
                        <div className="col-sm-3 d-none d-sm-block">
                            <SectionListLearn />
                        </div>
                        <div className="col-sm-6">
                            {
                                learnDetail !== undefined && learnDetail.length !== 0 ?
                                    <ItemLearn setImage={link => this.setLinkImage(link)} openModalImg={this.openModalImg} getIdLearn={id => this.getIdLearn(id)} learn={learnDetail} />
                                    : null
                            }

                            {
                                isLoadingLearnDetail ?
                                    <div className="loading-ask">
                                        <img className="img-loading-ask" src={process.env.PUBLIC_URL + "/images/loading.gif"} alt="loading learn list" />
                                    </div> : null
                            }

                        </div>
                        <div className="col-sm-3 d-none d-sm-block">

                            <SectionVideo
                                marginLearn="margin-video-learn"
                                video={sectionVideos}
                                onOpenModal={this.openModalVideo}
                            />

                            {
                                isLoadsectionVideos ?
                                    <div className="loading-ask">
                                        <img className="img-loading-ask" src={process.env.PUBLIC_URL + "/images/loading.gif"} alt="loading learn list" />
                                    </div> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        learns: state.learnDetail.learns,
        open: state.learnDetail.open,
        errors: state.learnDetail.errors,
        sectionVideos: state.learnDetail.sectionVideos,
        openVideo: state.learnDetail.openVideo,
        linkVideo: state.learnDetail.linkVideo,
        lazyLoading: state.learnDetail.lazyLoading,
        signin: state.signin,
        learnDetail: state.learnDetail.learnDetail,
        isLoadsectionVideos: state.learnDetail.isLoadsectionVideos,
        isLoadingLearnDetail: state.learnDetail.isLoadingLearnDetail,
        openModalImage: state.learnDetail.openModalImage,
        linkImage: state.learnDetail.linkImage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        learnDetailPageActionCreators: bindActionCreators(learnDetailPageAction, dispatch),
        commonActionCreators: bindActionCreators(commonAction, dispatch),
        getAskPageCreators: bindActionCreators(getNewFeedAction, dispatch),
    }
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withConnect)(learnDetailPage);
