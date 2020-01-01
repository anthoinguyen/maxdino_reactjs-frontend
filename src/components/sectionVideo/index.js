import React, { Component } from 'react';
import './styles.css';
import ItemVideo from './../itemVideo';

export class SectionVideo extends Component {

    render() {
        const { video, onOpenModal, marginLearn } = this.props;
        return (
            <div className={`section section-video ${marginLearn}`}>
                <div className="section-title">
                    <b>Videos</b>
                    <a href="/404">See More</a>
                </div>
                <div className="list-item-video">
                    {
                        video.map((item, index) => {
                            return <ItemVideo itemVideo={item} onOpenModal={onOpenModal} key={index} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SectionVideo
