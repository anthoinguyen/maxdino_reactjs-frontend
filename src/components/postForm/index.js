import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getNewFeedAction from "../../containers/askPage/actions";
import { PostImage } from "../postImage";
import './styles.css';

export class PostForm extends Component {
    addPost = async values => {
        const { reset } = this.props;
        await this.props.getAskPageCreators.postStatus(values);
        await reset();
    };

    render() {
        const { handleSubmit, isLoadPostAsk } = this.props;
        return (
            <div>
                <div className="content-post">
                    <form onSubmit={handleSubmit(this.addPost)}>
                        <Field
                            className="input-post-content"
                            name="askContent"
                            type="text"
                            rows="3"
                            placeholder="Start posting today..."
                            component="textarea"
                        />

                        <div className="footer-post">
                            <div className="row">
                                <div className="col-6 icon-ask-config">
                                    <Field name="askImage" type="file" component={PostImage} />
                                    <a href="/404"><span className="icon-link" /></a>
                                    <a href="/404"><span className="icon-add" /></a>
                                </div>
                                <div className="col-6">
                                    <div className="text-right">
                                        <span className="post-on">Also post on</span>
                                        <span className="icon-icon-facebook" />
                                        <span className="icon-icon-twitter" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn-post-status" action="submit" disabled={isLoadPostAsk}>
                            POST
                            {
                                isLoadPostAsk ?
                                    <div className="loading-post-ask">
                                        <img className="img-loading-post-ask" src={process.env.PUBLIC_URL + "/images/loading-fff.gif"} alt="loading post ask" />
                                    </div> : null
                            }
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAskPageCreators: bindActionCreators(getNewFeedAction, dispatch),
    };
};

let withConnect = connect(null, mapDispatchToProps)(PostForm);
export default reduxForm({
    form: 'addPost',
})(withConnect);
