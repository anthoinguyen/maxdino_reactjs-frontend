import React, { Component } from "react";
import "./styles.css";
import SectionNews from "./../../components/sectionNews";
import SectionVideo from "./../../components/sectionVideo";
import SectionPost from "./../../components/sectionPost";
import SectionFeed from "./../../components/sectionFeed";
import SectionConnection from "./../../components/sectionConnection";
import ModalError from "./../../components/modal/modalError";
import ModalVideo from "./../../components/modal/modalVideo";
import ModalDelete from "./../../components/modal/modalDelete";
import ModalImage from "./../../components/modal/modalImg";

import { reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getNewFeedAction from "./actions";
import * as commonAction from "./../signin/actions";

export class AskPage extends Component {
  componentWillMount() {
    if (!localStorage.getItem("jwtToken")) {
      if (!window.sessionStorage.getItem("jwtToken")) {
        this.props.history.push("/signin");
      }
    }
  }
  componentDidMount() {
    this.props.getAskPageCreators.setFetchingData();
    this.props.getAskPageCreators.getNewFeed();
    this.props.getAskPageCreators.getSectionNews();
    this.props.getAskPageCreators.getVideo();
    this.props.getAskPageCreators.getConnection();
    this.props.getAskPageCreators.getProfile();
    window.addEventListener("scroll", this.loadOnScroll);
  }
  loadOnScroll = e => {
    if (this.props.lazyLoading.isFetched) return;
    var el = document.getElementById("ask-is-end");
    var rect = el.getBoundingClientRect();
    var isAtEnd =
      rect.bottom - 1 <=
      (window.innerHeight || document.documentElement.clientHeight);

    if (isAtEnd) {
      if (!this.props.lazyLoading.isFetching) {
        this.props.getAskPageCreators.setFetchingData();
        this.props.getAskPageCreators.getNewFeed();
      }
    }
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadOnScroll);
  }
  addComment = async comment => {
    await this.props.getAskPageCreators.addComment(comment);
    await this.props.getAskPageCreators.getConnection();
  };
  getComment = async askId => {
    this.props.getAskPageCreators.getComment(askId);
  };
  onClose = () => {
    this.props.getAskPageCreators.closeModalError();
  };
  openModalVideo = data => {
    this.props.getAskPageCreators.openModalVideo(data);
  };
  closeModalVideo = () => {
    this.props.getAskPageCreators.closeModalVideo();
  };
  onLikeAsk = async data => {
    await this.props.getAskPageCreators.likeAsk(data);
    await this.props.getAskPageCreators.getConnection();
  };
  openModalDelete = data => {
    this.props.getAskPageCreators.openModalDelete(data);
  };
  closeModalDelete = () => {
    this.props.getAskPageCreators.closeModalDelete();
  };
  argeeDelete = () => {
    this.props.getAskPageCreators.argeeDelete(this.props.idAskDelete);
  };
  onCloseModalImg = () => {
    this.props.getAskPageCreators.closeModalImage();
  };
  openModalImg = () => {
    this.props.getAskPageCreators.openModalImage();
  };
  setLinkImage = link => {
    this.props.getAskPageCreators.setLinkImage(link);
  };
  render() {
    const {
      newFeeds,
      signin,
      errors,
      sectionNews,
      sectionVideos,
      linkVideo,
      sectionConnections,
      open,
      openVideo,
      openModalDelete,
      lazyLoading,
      isLoadPostAsk,
      isLoadsectionVideos,
      isLoadsectionConnections,
      userProfile,
      openModalImage,
      linkImage
    } = this.props;
    if (
      localStorage.getItem("jwtToken") ||
      window.sessionStorage.getItem("jwtToken")
    ) {
      signin.isSignInSuccess = true;
    } else {
      signin.isSignInSuccess = false;
    }
    return (
      <div className="container">
        <SectionNews post={sectionNews} />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="show-video-ask">
                <SectionVideo
                  video={sectionVideos}
                  onOpenModal={this.openModalVideo}
                />
                {isLoadsectionVideos ? (
                  <div className="loading-ask">
                    <img
                      className="img-loading-ask"
                      src={process.env.PUBLIC_URL + "/images/loading.gif"}
                      alt="loading learn list"
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-sm-6">
              <ModalError errors={errors} open={open} onClose={this.onClose} />
              <ModalVideo
                linkVideo={linkVideo}
                open={openVideo}
                onCloseModal={this.closeModalVideo}
              />
              <ModalDelete
                openModalDelete={openModalDelete}
                closeModalDelete={this.closeModalDelete}
                argeeDelete={this.argeeDelete}
              />
              <ModalImage
                open={openModalImage}
                onClose={this.onCloseModalImg}
                img={linkImage}
              />
              <SectionPost
                isLoadPostAsk={isLoadPostAsk}
                userProfile={userProfile}
              />
              {newFeeds.map((post, index) => {
                return (
                  <SectionFeed
                    onLikeAsk={this.onLikeAsk}
                    addComment={this.addComment}
                    getComment={this.getComment}
                    openModalDelete={this.openModalDelete}
                    setImage={link => this.setLinkImage(link)}
                    openModalImg={this.openModalImg}
                    post={post}
                    disable={true}
                    key={index}
                  />
                );
              })}
              {!lazyLoading.isFetched ? (
                <div id="ask-is-end" className="loading-ask">
                  <img
                    className="img-loading-ask"
                    src={process.env.PUBLIC_URL + "/images/loading.gif"}
                    alt="loading learn list"
                  />
                </div>
              ) : null}
            </div>
            <div className="col-sm-3">
              <div className="show-connection-ask">
                <SectionConnection sectionConnections={sectionConnections} />
                {isLoadsectionConnections ? (
                  <div className="loading-ask">
                    <img
                      className="img-loading-ask"
                      src={process.env.PUBLIC_URL + "/images/loading.gif"}
                      alt="loading learn list"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newFeeds: state.askPage.listAsks,
    signin: state.signin,

    sectionNews: state.askPage.sectionNews,
    sectionVideos: state.askPage.sectionVideos,
    linkVideo: state.askPage.linkVideo,
    errors: state.askPage.errors,
    sectionConnections: state.askPage.sectionConnections,

    open: state.askPage.open,
    openVideo: state.askPage.openVideo,
    openModalDelete: state.askPage.openModalDelete,
    idAskDelete: state.askPage.idAskDelete,

    lazyLoading: state.askPage.lazyLoading,
    isLoadPostAsk: state.askPage.isLoadPostAsk,
    isLoadsectionVideos: state.askPage.isLoadsectionVideos,
    isLoadsectionConnections: state.askPage.isLoadsectionConnections,
    userProfile: state.askPage.userProfile,

    openModalImage: state.listItemLearn.openModalImage,
    linkImage: state.listItemLearn.linkImage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAskPageCreators: bindActionCreators(getNewFeedAction, dispatch),
    commonActionCreators: bindActionCreators(commonAction, dispatch)
  };
};

let withConnect = connect(mapStateToProps, mapDispatchToProps)(AskPage);
export default reduxForm({
  form: "signin"
})(withConnect);
