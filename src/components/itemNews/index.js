import React, { Component } from 'react';
import './styles.css';
import * as host from "./../../constants/host";

export class ItemNews extends Component {
    render() {
        const { news } = this.props;
        //console.log(news);
        return (
            <div className="item-news-ask">
                <div className="item-news-image">
                    <img src={host.apiUrl + news.image} alt="item-news" />
                </div>
                <div className="item-news-content-ask">
                    <div className="item-news-title-ask">{news.title}</div>
                    <div className="item-news-detail-ask">
                        <p>{news.content}</p>
                    </div>
                    <div className="item-news-name-ask">{news.username} - {news.updated_at}</div>
                </div>
            </div>
        )
    }
}

export default ItemNews
