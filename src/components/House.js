import React, { Component } from 'react';

class House extends Component {
    render() {
        return (
        <div className='page'>
            <div className='header'>
                <h2>Members of a GoT House</h2>
            </div>
            <ul className='list'>
                A list of members
            </ul>
        </div>
        )
    }
}

export default House;