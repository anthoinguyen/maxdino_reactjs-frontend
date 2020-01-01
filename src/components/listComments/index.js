import React, { Component } from 'react';
import './styles.css';
import FormComment from './../formComment';
import AskComment from './../askComment';
import { compose } from "redux";
import { connect } from "react-redux";

export class ListComment extends Component {
    render() {
        const { addComment, postId, askComment, checkClickComment, checkAddComment, avatar } = this.props;
        return (
            <div>
                {checkClickComment ?
                    <div className="list-ask-comment">
                        <FormComment addComment={addComment} postId={postId} checkAddComment={checkAddComment} avatar={avatar}/>
                        {
                            askComment.map((item, index) => {
                                if(item.ask_id === postId){
                                    return <AskComment comment={item} key={index} />
                                }else{
                                    return '';
                                }
                            })
                        }
                    </div>
                    : ''
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        askComment: state.askPage.askComment,
    };
};
const withConnect = connect(
    mapStateToProps
);

export default compose(withConnect)(ListComment);
