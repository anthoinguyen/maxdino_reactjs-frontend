import React, { Component } from 'react';
import MenuToogler from '../menuToggler'
import './styles.css';

export class ShowMenuToggler extends Component {
    render() {
        return (
            <div>
                {this.props.menuShow ?
                    <MenuToogler /> :
                    ""
                }
            </div>
        )
    }
}

export default ShowMenuToggler
