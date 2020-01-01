import React, { Component } from 'react';
import './styles.css';
import * as host from "./../../constants/host";
import PostForm from './../postForm';

export class SectionPost extends Component {
    nth = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    formatDate = (date) => {
        var fortnightAway = new Date(date),
            dateFormat = fortnightAway.getDate(),
            monthFormat = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"][fortnightAway.getMonth()];
        return (dateFormat + this.nth(dateFormat) + " " + monthFormat + ", " + fortnightAway.getFullYear());
    }
    render() {
        const { addPost, isLoadPostAsk, userProfile } = this.props;
        var date = new Date();
        return (
            <div className="section section-post">
                <div className="head-post">
                    <div className="avatar-user"><img src={host.apiUrl + userProfile.avatar} alt="avatar" /></div>
                    <div className="head-post-content">
                        <div className="head-post-name-user">{userProfile.username}</div>
                        <div className="head-post-story-subtitle">
                            <div className="date"><span className="icon-calendar" />Today, {this.formatDate(date)}</div>
                            <div className="public">
                                <span className="icon-public" />
                                <div className="dropdown">
                                    <a href="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        Everyone
                                    <span className="icon-arrow-down" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/404">Action</a></li>
                                        <li><a href="/404">Another action</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PostForm addPost={addPost} isLoadPostAsk={isLoadPostAsk} />
            </div>
        )
    }
}

export default SectionPost
