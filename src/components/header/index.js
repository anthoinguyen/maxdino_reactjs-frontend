import React from 'react';
import './style.css';
import * as host from "./../../constants/host";
import ButtonLearn from "../buttonToggeLearnAsk";
import ButtonAsk from "../buttonToggeLearnAsk";
import ShowMenuToggler from "../showMenuToggler";
import ShowModalSearch from "../showSearch";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getLogout from "./../../containers/logout/actions";

class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShow: false,
            inPageLearn: false,
        };
    }
    toggleShow = () => {
        this.setState({ menuShow: !this.state.menuShow });
    }
    onClickLearn = () => {
        this.setState({ inPageLearn: true });
    }
    onClickAsk = () => {
        this.setState({ inPageLearn: false });
    }
    handleLogout = (e) => {
        e.preventDefault();
        this.props.signin.isSignInSuccess = false;
        this.props.getLogoutCreators.logout();
    }

    closeModal = () => {
        this.props.onCloseModal();
    }

    render() {
        const { loadingSearch, onOpenModal, onChange, onSubmit, asks, learns, openModalSearch, sumResultLearn, sumResultAsk, userProfile } = this.props;
        let stateMenu = '';
        let icon = '';
        if (this.state.inPageLearn) {
            stateMenu = 'Learn';
            icon = "icon-add";
        } else {
            stateMenu = 'Ask';
            icon = "icon-question-circle";
        }
        return (
            <div>
                <ShowModalSearch
                    open={openModalSearch}
                    asks={asks}
                    learns={learns}
                    sumResultLearn={sumResultLearn}
                    sumResultAsk={sumResultAsk}
                    onCloseModal={this.closeModal}
                    loadingSearch={loadingSearch}
                />

                <nav className="navbar navbar-expand-sm navbar-maxdino">
                    <a className="navbar-brand" href="/"><img src="./../assets/images/logo.png" alt="logo" /></a>
                    <button className="navbar-toggler"
                        type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={this.toggleShow}>
                        <ShowMenuToggler menuShow={this.state.menuShow} />
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="mobi-display-collapse visible-mobi">
                        <button className="btn btn-success button-search" type="button"><span className="icon-search" /></button>
                        <div className="dropdown-ask">
                            <a className="nav-link mobi-dropdown-menu d-flex align-items-center" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="icon-question-circle" />
                                <span className="ask text-lef"><b>Ask</b></span>
                                <span className="icon-arrow-down ml-auto" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right menu-ask-learn menu-responsive" aria-labelledby="navbarDropdown">
                                <div onClick={this.onClickAsk} ><ButtonAsk wd="width-responsive" path="/" icon="icon-question-circle">Ask</ButtonAsk></div>
                                <div className="margin-togge" onClick={this.onClickLearn} ><ButtonLearn wd="width-responsive" path="/learn" icon="icon-add">Learn</ButtonLearn></div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto visible-desktop">
                            <li className="nav-item dropdown d-flex align-items-center">
                                <a className="nav-link d-flex align-items-center responsive-togge-ask-learn" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className={icon} />
                                    <span className="ask text-lef"><b>{stateMenu}</b></span>
                                    <span className="icon-arrow-down ml-auto" />
                                </a>
                                <div className="dropdown-menu menu-ask-learn" aria-labelledby="navbarDropdown">
                                    <div onClick={this.onClickAsk} ><ButtonAsk path="/" icon="icon-question-circle">Ask</ButtonAsk></div>
                                    <div className="margin-togge" onClick={this.onClickLearn} ><ButtonLearn path="/learn" icon="icon-add">Learn</ButtonLearn></div>
                                </div>
                            </li>
                            <form onSubmit={e => onSubmit(e)} className="form-inline my-2 my-lg-0 d-flex">
                                <button className="form-button-search" type="button"><span className="icon-search" /></button>
                                <input onBlur={this.closeModal} id="inputSearch" onChange={e => onChange(e)} onClick={e => onOpenModal(e)} className="form-control mr-sm-2 form-input-search" type="search" placeholder="Ask something about Finance" aria-label="Search" />
                            </form>
                        </ul>
                        <ul className="navbar-nav navbar-noti-img-dropdown d-flex align-items-center visible-desktop">
                            <li className="nav-item nav-noti">
                                <a href="/404"><span className="icon-noti" /></a>
                            </li>
                            <li className="nav-item dropdown nav-img dropleft menu-left-dropdown">
                                <a href="/404" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <img src={host.apiUrl + userProfile.avatar} alt="avatar" />
                                    <span className="icon-arrow-down" /></a>
                                <ul className="dropdown-menu menu-user-dropdown">
                                    <li><a href="/change-password">Change password<span className="fa fa-unlock-alt ml-auto pull-right"></span></a></li>
                                    <hr className="hr-menu" />
                                    <li><a href="/" onClick={e => this.handleLogout(e)}>Logout<span className="fa fa-sign-out ml-auto mr-2"></span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        signin: state.signin,
        userProfile: state.askPage.userProfile,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getLogoutCreators: bindActionCreators(getLogout, dispatch),
    };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(header);

