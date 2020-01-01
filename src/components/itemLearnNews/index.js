import React, { Component } from 'react';
import './styles.css';

export class ItemLearnNews extends Component {
    render() {
        const { content, date, percent, avatar } = this.props;
        return (
            <div className="item-news">
                <div className="item-news-content d-flex">
                    <div className="item-news-img">
                        <img src={avatar} alt="recomment communities" />
                    </div>
                    <div className="item-news-recommend">
                        <div className="item-news-text">
                            {content}
                        </div>
                        <div className="item-news-time">
                            {date}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="item-news-footer d-flex">
                    <div className="item-news-member">
                        <div className="text-uppercase">member</div>
                        <div className="plus">
                            <span className="plus-text d-flex justify-content-center">+7</span>
                        </div>
                        <div className="member-plus">
                            <div className="member-1">
                            </div>
                            <div className="member-2">
                            </div>
                            <div className="member-3">
                            </div>
                        </div>
                    </div>
                    <div className="item-news-percent">
                        <div className="percent-text text-uppercase">winning trades</div>
                        <div className="percent-content">
                            {percent}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ItemLearnNews;
