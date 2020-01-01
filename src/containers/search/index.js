import React from 'react';
import './styles.css';
import { compose, bindActionCreators } from "redux";
import * as navbarAction from './actions';
import { connect } from "react-redux";
import NavBar from "./../../components/header";
import ModalError from "./../../components/modal/modalError";

class header extends React.Component {
    handleChangeSearch = (e) => {
        this.props.navbarActionCreators.setKeywordSearch(e.target.value);
    }
    onOpenModalSearch = (e) => {
        // this.props.navbarActionCreators.onOpenModalSearch();
        // this.props.navbarActionCreators.getTopSearch();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.navbarActionCreators.onOpenModalSearch();
        this.props.navbarActionCreators.getTopSearch();
    }

    onCloseModal = () => {
        this.props.navbarActionCreators.onCloseModal();
    }

    onClose = () => {
        this.props.navbarActionCreators.closeModalError();
    };

    // onPushLogin = () => {
    //     this.props.commonActionCreators.pushLogin();
    // };

    render() {
        const { open, errors, openModalSearch, asks, learns, sumResultAsk, sumResultLearn, loadingSearch } = this.props;
        return (
            <div>
                <ModalError
                    errors={errors}
                    open={open}
                    onClose={this.onClose}
                    // pushLogin={this.onPushLogin}
                />
                <NavBar
                    onOpenModal={e => this.onOpenModalSearch(e)}
                    onChange={e => this.handleChangeSearch(e)}
                    onSubmit={e => this.handleSubmit(e)}
                    openModalSearch={openModalSearch}
                    asks={asks}
                    learns={learns}
                    sumResultAsk={sumResultAsk}
                    sumResultLearn={sumResultLearn}
                    onCloseModal={this.onCloseModal}
                    loadingSearch={loadingSearch}
                />
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.navBar.open,
        errors: state.navBar.errors,
        asks: state.navBar.asks,
        sumResultAsk: state.navBar.sumResultAsk,
        sumResultLearn: state.navBar.sumResultLearn,
        learns: state.navBar.learns,
        openModalSearch: state.navBar.openModalSearch,
        loadingSearch: state.navBar.loadingSearch,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        navbarActionCreators: bindActionCreators(navbarAction, dispatch),
    }
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withConnect)(header);