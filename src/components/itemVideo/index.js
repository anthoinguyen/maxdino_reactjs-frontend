import React, { Component } from 'react';
import * as host from "./../../constants/host";
import './styles.css';

export class index extends Component {
    handleOpenModalVideo = () => {
        this.props.onOpenModal(this.props.itemVideo.link);
    };
    render() {
        const { itemVideo } = this.props;
        return (
            <div className="item-video">
                <div className="item-video-img">
                    <img className="thumbnail-video" src={host.apiUrl+itemVideo.image} alt="video" />
                    <span className="icon-icon" onClick={this.handleOpenModalVideo} />
                </div>
                <div className="item-video-title">{itemVideo.title}</div>
            </div>
        )
    }
}

export default index
