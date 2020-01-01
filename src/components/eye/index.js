import React, { Component } from 'react'
import './styles.css'

export class Eye extends Component {
    render() {
        return (
            <div>
                {this.props.eye ?
                    <img className="button-icon-eye-config" src="/images/eye-open.svg" alt="eye open" /> :
                    <img className="button-icon-eye-config" src="/images/eye-hide.svg" alt="eye close" />
                }
            </div>
        )
    }
}

export default Eye
