import React from "react";
import ItemListLearn from "./../itemListLearn";
import "./styles.css";

class LearnList extends React.Component {

    render() {
        const { header } = this.props;
        return (
            <div className="learn-list-left">
                <div className="learn-list-left-header d-flex">
                    <div className="learn-list-left-title text-uppercase">{header}</div>
                    <div className="learn-list-left-more ml-auto">
                        <a href="/404">See More</a>
                    </div>
                </div>
                <hr className="hr-learn-list-left" />
                <ItemListLearn title="Download Free Song For Ipod" content='"EU tells Netanyahu no support for Trumbs Jerusalem move."' />
                <ItemListLearn title="Download Free Song For Ipod" content='"EU tells Netanyahu no support for Trumbs Jerusalem move."' />
                <ItemListLearn title="Download Free Song For Ipod" content='"EU tells Netanyahu no support for Trumbs Jerusalem move."' />
            </div>
        );
    }
}

export default LearnList;
