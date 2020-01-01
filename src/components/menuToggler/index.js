import React, { Component } from 'react'
import UserMenu from '../userMenu'
import LogoutMenu from '../logoutMenu'
import SectionVideo from '../sectionVideo';
import SectionConnection from '../sectionConnection';
import ModalError from "../modal/modalError";
import ModalVideo from "../modal/modalVideo";
import { bindActionCreators } from "redux";
import * as getNewFeedAction from "../../containers/askPage/actions";
import * as learnPageAction from '../../containers/learnPage/actions';
import * as host from "./../../constants/host";
import { connect } from "react-redux";
import * as getLogout from "./../../containers/logout/actions";
import './styles.css'

export class MenuToggler extends Component {
    onClose = () => {
        this.props.getAskPageCreators.closeModalError();
    };
    onCloseLearn = () => {
        this.props.learnPageActionCreators.closeModalError();
    };
    openModalVideo = (data) => {
        this.props.getAskPageCreators.openModalVideo(data);
    };
    openModalVideoLearn = (data) => {
        this.props.learnPageActionCreators.openModalVideo(data);
    };
    closeModalVideo = () => {
        this.props.getAskPageCreators.closeModalVideo();
    };
    closeModalVideoLearn = () => {
        this.props.learnPageActionCreators.closeModalVideo();
    };
    handleLogout = () => {
        this.props.signin.isSignInSuccess = false;
        this.props.getLogoutCreators.logout();
    }

    handleClickEdit = (e) => {
        e.preventDefault();
    }
    
    render() {
        const {
            errors,
            sectionVideos,
            linkVideo,
            sectionConnections,
            open,
            openVideo,
            errorsLearn,
            sectionVideosLearn,
            linkVideoLearn,
            openLearn,
            openVideoLearn
        } = this.props;
        return (
            <div className="button-menu-mobile-config">
                <nav className="navbar-maxdino-menu-config">
                    <a href="/">
                        <img src="./../assets/images/logo.png" alt="logo" />
                    </a>
                    <a href="/" onClick={e => this.handleClickEdit(e)} className="button-x-config">
                        <img src="/images/button-X.svg" alt="logo x" />
                    </a>
                </nav>
                <UserMenu />
                {window.location.href === host.localHost ?
                    <div>
                        <ModalError
                            errors={errors}
                            open={open}
                            onClose={this.onClose}
                        />
                        <div className="col-sm-3"> <SectionConnection sectionConnections={sectionConnections} /> </div>
                        <SectionVideo
                            video={sectionVideos}
                            onOpenModal={this.openModalVideo}
                        />
                        <ModalVideo
                            linkVideo={linkVideo}
                            open={openVideo}
                            onCloseModal={this.closeModalVideo}
                        />
                    </div>
                    :
                    <div>
                        <ModalError
                            errors={errorsLearn}
                            open={openLearn}
                            onClose={this.onCloseLearn}
                        />
                        <SectionVideo
                            video={sectionVideosLearn}
                            onOpenModal={this.openModalVideoLearn}
                        />
                        <ModalVideo
                            linkVideo={linkVideoLearn}
                            open={openVideoLearn}
                            onCloseModal={this.closeModalVideoLearn}
                        />
                    </div>
                }

                <span onClick={this.handleLogout}>
                    <LogoutMenu />
                </span>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newFeeds: state.askPage.results,
        signin: state.signin,

        sectionVideos: state.askPage.sectionVideos,
        linkVideo: state.askPage.linkVideo,
        errors: state.askPage.errors,
        sectionConnections: state.askPage.sectionConnections,

        open: state.askPage.open,
        openVideo: state.askPage.openVideo,

        errorsLearn: state.learnPage.errors,
        sectionVideosLearn: state.learnPage.sectionVideos,
        linkVideoLearn: state.learnPage.linkVideo,

        openLearn: state.learnPage.open,
        openVideoLearn: state.learnPage.openVideo,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getAskPageCreators: bindActionCreators(getNewFeedAction, dispatch),
        learnPageAction: bindActionCreators(learnPageAction, dispatch),
        getLogoutCreators: bindActionCreators(getLogout, dispatch),
    };
};

let withConnect = connect(mapStateToProps, mapDispatchToProps)(MenuToggler);
export default withConnect;

