import React from "react";
import ModalSearch from "./../modal/modalSearch";
import "./styles.css";

class ShowSearch extends React.Component {

    closeModal = () => {
        this.props.onCloseModal();
    }

    render() {
        const { open, asks, learns, sumResultAsk, sumResultLearn, loadingSearch } = this.props;
        return (
            <div>
                <ModalSearch
                    open={open}
                    asks={asks}
                    learns={learns}
                    sumResultAsk={sumResultAsk}
                    sumResultLearn={sumResultLearn}
                    onCloseModal={this.closeModal}
                    loadingSearch={loadingSearch}
                />
            </div>
        );
    }
}

export default ShowSearch;
