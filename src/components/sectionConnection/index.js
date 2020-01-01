import React, { Component } from 'react';
import './styles.css';
import ItemConnection from './../itemConnection';

export class SectionConnection extends Component {
    render() {
        const { sectionConnections } = this.props;
        return (
            <div className="section section-connection">
                <div className="section-title">
                    <b>CONNECTION ACTIVITIES</b>
                </div>
                <div className="list-item-connection">
                    {
                        sectionConnections.map((item, index) => {
                            return <ItemConnection item={item} key={index} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SectionConnection
