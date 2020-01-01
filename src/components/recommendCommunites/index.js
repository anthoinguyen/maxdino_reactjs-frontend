import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import ItemLearnNews from "./../itemLearnNews";
import "./styles.css";

export class RecommnendCommunities extends Component {
    render() {
        const options = {
            items: 4,
            autoplay: false,
            loop: false,
            margin: 30,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            }
        };

        const events = {
            onDragged: function (event) { },
            onChanged: function (event) { }
        };
        return (
            <div>
                <div className="section-news">
                    <div className="container learn-page-view-large clear-padding">
                        <div className="mobi-view-320">
                            <div className="text-header text-uppercase d-inline">recommend communities</div>
                            <span className="text-view-all"><a href="/">View All</a></span>
                            <div className="list-item-news">
                                <OwlCarousel ref="car" options={options} events={events} >
                                    <ItemLearnNews content="Crypto Investor" date="Daily" percent="68.3%" avatar="./../assets/images/bitmap.jpg" />
                                    <ItemLearnNews content="Green Jacket Forex" date="Competition 2018" percent="68.3%" avatar="./../assets/images/bitmap1.jpg" />
                                    <ItemLearnNews content="HPT Live" percent="68.3%" avatar="./../assets/images/bitmap2.jpg" />
                                    <ItemLearnNews content="National Youth" date="Forex 2017" percent="68.3%" avatar="./../assets/images/bitmap3.jpg" />
                                </OwlCarousel>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default RecommnendCommunities;
