import React, { Component } from 'react';
import './styles.css';
import * as host from "./../../constants/host";

export class AskComment extends Component {
    render() {
        const { comment } = this.props;
        return (
            <div className="item-ask-comment row">
                <div className="col-sm-1 avatar-comment">
                    <img src={host.apiUrl + comment.avatar} alt="avatar" />
                </div>
                <div className="item-ask-comment-content col-sm-11">
                    <span className="username-comment">{comment.username}</span>
                    <span className="content-comment">{comment.content}</span>
                </div>
            </div>
        )
    }
}

export default AskComment;
