import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

class ButtonLearn extends React.Component {

    render() {
        const { path, icon, children, wd } = this.props;
        return (
            <Link to={path} className={`dropdown-item-header dropdown-item d-flex dropdown-item-color responsive-togge-ask-learn ${wd}`}>
                <span className={`${icon} icon-question-circle-style justify-content-center align-self-center`} />
                <span className="togge-learn-ask"><b>{children}</b></span>
            </Link>
        );
    }
}

export default ButtonLearn;