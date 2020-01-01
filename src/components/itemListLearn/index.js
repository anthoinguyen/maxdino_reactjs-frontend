import React from "react";

import "./styles.css";

class SectionListLearn extends React.Component {

    render() {
        const { title, content } = this.props;
        return (
            <div className="learn-list-item">
                <div className="learn-list-item-title">
                    {title}
                </div>
                <div className="learn-list-item-content">
                    {content}
                </div>
            </div>
        );
    }
}

export default SectionListLearn;
