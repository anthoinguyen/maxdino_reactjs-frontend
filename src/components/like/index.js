import React from 'react';

class Like extends React.Component {
    handleClickLike = () => {
        if (this.props.disable) {
            this.props.onLikeAsk();
        }
    }
    render() {
        const { like, numLike } = this.props;
        return (
            <div className="ratting" onClick={this.handleClickLike}>
                {like ?
                    <span className="icon-like icon-like-color" /> :
                    <span className="icon-like" />
                }
                <b>{numLike}</b> Reactions
                        </div>
        )
    }
}

export default Like;