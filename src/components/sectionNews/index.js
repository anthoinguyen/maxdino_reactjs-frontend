import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import './style.css';
import ItemNews from './../itemNews';

export class SectionNews extends Component {
    render() {
        const options = {
            items: 3,
            autoplay: true,
            margin: 30,
            loop: true,
            rewind: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        };

        const events = {
            onDragged: function (event) { },
            onChanged: function (event) { }
        };
        const { post } = this.props;
        return (
            <div className="section section-news">
                <div className="container">
                    <div className="list-item-news">
                        {
                            post.length ?
                            <OwlCarousel ref="car" options={options} events={events} >
                                {
                                    post.map((item, index) => {
                                        return <ItemNews news={item} key={index} />
                                    })
                                }
                            </OwlCarousel> :null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionNews
