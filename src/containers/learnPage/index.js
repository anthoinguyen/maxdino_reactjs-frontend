import React from "react";
import { compose, bindActionCreators } from "redux";
import RecommendCommunities from './../../components/recommendCommunites';
import SectionListLearn from "./../../components/sectionListLearn";
import SectionVideo from './../../components/sectionVideo';
import ModalVideo from "./../../components/modal/modalVideo";
import ModalError from "./../../components/modal/modalError";
import { connect } from 'react-redux';
import * as learnPageAction from './actions';
import * as commonAction from "./../signin/actions";
import ListItemLearn from "./../listItemLearn";
import * as getNewFeedAction from "./../askPage/actions";

import "./styles.css";


class learnPage extends React.Component {

    componentWillMount() {
        if (!localStorage.getItem("jwtToken")) {
            if (!sessionStorage.getItem('jwtToken')) {
                this.props.history.push("/signin");
            }
        }
        this.props.learnPageActionCreators.getVideo();
        this.props.getAskPageCreators.getProfile();
    }

    onClose = () => {
        this.props.learnPageActionCreators.closeModalError();
    };

    onPushLogin = () => {
        this.props.commonActionCreators.pushLogin();
    };

    openModalVideo = (link) => {
        this.props.learnPageActionCreators.openModalVideo(link);
    };

    closeModalVideo = () => {
        this.props.learnPageActionCreators.closeModalVideo();
    };

    getIdLearn = (id) => {
        this.props.history.push(`/learn/${id}`);
    }

    render() {
        if (localStorage.getItem("jwtToken") || window.sessionStorage.getItem('jwtToken')) {
            this.props.signin.isSignInSuccess = true;
        }
        else {
            this.props.signin.isSignInSuccess = false;
        }
        const { open, errors, sectionVideos, openVideo, linkVideo, isLoadsectionVideos } = this.props;
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

                <div className="container learn-page-view-large">
                    <div className="row">
                        <div className="col-sm-3 d-none d-sm-block">
                            <SectionListLearn />
                        </div>
                        <div className="col-sm-6">
                            {
                                <ListItemLearn getIdLearn={id => this.getIdLearn(id)} />
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
        learns: state.learnPage.learns,
        open: state.learnPage.open,
        errors: state.learnPage.errors,
        sectionVideos: state.learnPage.sectionVideos,
        openVideo: state.learnPage.openVideo,
        linkVideo: state.learnPage.linkVideo,
        lazyLoading: state.learnPage.lazyLoading,
        signin: state.signin,
        learnDetail: state.learnPage.learnDetail,
        isLoadsectionVideos: state.learnPage.isLoadsectionVideos,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        learnPageActionCreators: bindActionCreators(learnPageAction, dispatch),
        commonActionCreators: bindActionCreators(commonAction, dispatch),
        getAskPageCreators: bindActionCreators(getNewFeedAction, dispatch),
    }
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withConnect)(learnPage);
