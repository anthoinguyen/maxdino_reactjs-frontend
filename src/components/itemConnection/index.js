import React, { Component } from 'react';
import './styles.css';
import * as host from "./../../constants/host";

export class ItemConnection extends Component {
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
        const { item } = this.props;
        return (
            <div className="item-connection">
                <div className="item-connection-img">
                    <img src={host.apiUrl + item.avatar} alt="avatar" />
                </div>
                <div className="item-connection-content">
                    <div className="user-name">{item.username}</div>
                    <div className="user-activities">
                        <div><span>{item.type} post</span></div>
                        <div><p className="text">"{item.askContent} "</p></div>
                        <div><span>{this.formatDate(item.updated_at)}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemConnection
