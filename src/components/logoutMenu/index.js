import React from 'react'
import './styles.css'

class LogoutMenu extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="item-logout">
                <a href="/" onClick={e => this.handleClick(e)} className="logout-btn">
                    <img src="/images/logout.svg" alt="logout btn" />
                    <span className="logout-text">Log out</span>
                </a>
            </div>
        )
    }
}

export default LogoutMenu;
