import React from "react";
import LearnListBeginer from "./../learnList";
import LearnListAdvance from "./../learnList";
import "./styles.css";

class SectionListLearn extends React.Component {

    render() {
        // const {  } = this.props;
        return (
            <div>
                <LearnListBeginer header="beginner" />
                <div className="margin-edit">
                    <LearnListAdvance header="advance" />
                </div>
            </div>
        );
    }
}

export default SectionListLearn;
