import React, { Component } from 'react'
import './styles.css';

export class UserMenu extends Component {
    render() {
        return (
            <div className="user-menu-config" >
                <div className="user-infor-config">
                    <img className="img-user-infor" src="/images/avatar-infor.png" alt="avatar" />
                    <br />
                    <span className="name-user-infor">David Lord</span>
                    <br />
                    <a href="/404" className="change-profile-menu">Change profile picture</a>
                </div>
            </div>
        )
    }
}

export default UserMenu
