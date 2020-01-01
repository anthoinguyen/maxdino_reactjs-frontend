import React from "react";
import { apiUrl } from "./../../constants/host";
import { Link } from "react-router-dom";
import "./styles.css";

class contentLearn extends React.Component {

  handleClickImg = (event) => {
    event.preventDefault();
    this.props.openModalImg();
    this.props.setImage(`${apiUrl}/${this.props.img}`);
  }
  
  render() {
    const { content, img, overFlowText } = this.props;
    return (
      <div>
        
        <div className="content-post">
          <div className="feed-text">
            <span className={overFlowText}>
              {content}
            </span>
          </div>
          <div className="post-feed">
            <div className="post-feed-img">
              <Link to="/" onClick={e => this.handleClickImg(e)}><img className="img-content-learn" src={`${apiUrl}/${img}`} alt="feed" /></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contentLearn;
