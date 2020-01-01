import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import './../../../../node_modules/react-modal-video/scss/modal-video.scss';
export class ModalVideos extends Component {
  handleCloseModal = () => {
    this.props.onCloseModal();
  }
  render() {
    const { open, linkVideo } = this.props;
    let link = linkVideo;
    let videoId = link.substring(17);
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={open} videoId={videoId} onClose={this.handleCloseModal} />
      </div>
    )
  }
}

export default ModalVideos
