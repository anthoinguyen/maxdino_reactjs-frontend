import React, { Component } from 'react';
import './styles.css';
import * as host from "./../../constants/host";
import Like from './../like';
import ListComments from './../listComments';
import { Link } from "react-router-dom";

export class SectionFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeColorIcon: false,
            checkClickLike: false,
            checkLiked: false,
            checkClickComment: false,
        };
    }
    componentWillMount() {
        if (this.props.post.userReaction === 1) {
            this.setState({
                changeColorIcon: !this.state.changeColorIcon,
                checkLiked: !this.state.checkLiked,
            })
        } else {
            this.setState({
                changeColorIcon: this.state.changeColorIcon,
                checkLiked: this.state.checkLiked,
            })
        }
    }
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
    onLikeAsk = async () => {
        await this.props.onLikeAsk(this.props.post.id);
        await this.setState({
            changeColorIcon: !this.state.changeColorIcon,
            checkClickLike: !this.state.checkClickLike,
        })
    };
    getComment = () => {
        if (this.props.disable) {
            this.props.getComment(this.props.post.id);
            this.setState({
                checkClickComment: !this.state.checkClickComment,
            })
        }
    };
    handleDeleteAsk = (event) => {
        event.preventDefault();
        this.props.openModalDelete(this.props.post.id);
    }
    handleClickImg = (event) => {
        event.preventDefault();
        this.props.openModalImg();
        this.props.setImage(host.apiUrl + this.props.post.image);
    }
    render() {
        const {post,addComment, editMargin, disable} = this.props;
        let numLike = 0;
        if (this.state.checkClickLike) {
            if (this.state.checkLiked) {
                numLike = post.countReactions - 1;
            } else {
                numLike = post.countReactions + 1;
            }
        } else {
            numLike = post.countReactions;
        }
        return (
            <div className="section section-post feed">
                <div className="item-feed">
                    <div className="dropdown">
                        <a href="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <span className="icon-more" /></a>
                        <ul className="dropdown-menu dropdown-menu-feed">
                            <li><a href="/" onClick={e => this.handleDeleteAsk(e)}>Delete</a></li>
                        </ul>
                    </div>
                    <div className="head-post">
                        <div className="avatar-user"><img src={host.apiUrl + post.avatar} alt="avatar" /></div>
                        <div className="head-post-content">
                            <div className="head-post-name-user">{post.username}</div>
                            <div className="head-post-story-subtitle">
                                <div className="date"><span className="icon-calendar" />{this.formatDate(post.created_at)}</div>
                                <div className="public">
                                    <span className="icon-public" />
                                    <div className="dropdown">
                                        <a href="/404" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
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
                    <div className="content-post">
                        <div className="post-feed">
                            <div className="post-feed-img">
                                <Link to="/" onClick={e => this.handleClickImg(e)}>
                                    {
                                        post.image !== null ?
                                            <img className="img-content-ask" src={host.apiUrl + post.image} alt="feed" /> : ''
                                    }
                                </Link>
                            </div>
                            <div className="post-feed-content">
                                <div className="post-feed-detail">
                                    {post.content}
                                    <br />
                                    <a href="/404">http://www.bbc.com/news/business-42390058</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-post">
                        <Like disable={disable} like={this.state.changeColorIcon} onLikeAsk={this.onLikeAsk} numLike={numLike} />
                        <div className="ratting" onClick={this.getComment}>
                            <span className="icon-comment" />
                            <b>{post.countComments}</b> Comments
                        </div>
                    </div>
                    <ListComments
                        addComment={addComment}
                        postId={post.id}
                        avatar={post.avatar}
                        checkClickComment={this.state.checkClickComment}
                    />
                </div>
                <div className={editMargin}></div>
            </div>
        )
    }
}

export default SectionFeed;
