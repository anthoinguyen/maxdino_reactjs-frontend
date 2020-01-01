import React, { Component } from 'react'
import './styles.css';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from "redux-form";
import * as host from "./../../constants/host";

export class FormComment extends Component {
    submit = async data => {
        const { reset } = this.props;
        if (!data.comment) {
            throw new SubmissionError({
                comment: "The comment is required."
            });
        }
        const comment = await {
            askId: this.props.postId,
            commentContent: data.comment
        };
        await this.props.addComment(comment);
        await reset();

    };
    render() {
        return (
            <div className="row item-form-ask-comment">
                <div className=" col-sm-1 avatar-comment">
                    <img src={host.apiUrl + this.props.avatar} alt="avatar" />
                </div>
                <div className="col-sm-11 form-comment">
                <form onSubmit={this.props.handleSubmit(this.submit)}>
                    <Field
                        className="input-comment"
                        name="comment"
                        type="text"
                        placeholder="Write a comment..."
                        component="input"
                        onChange={this.handleUserInput}
                    />
                </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'comment',
})(FormComment);
