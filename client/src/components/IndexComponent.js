import React, { Component } from 'react';

export default class IndexComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id      : 0,
            fName   : '',
            lName   : ''
        }
    }

    async componentDidMount() {
        const response = await fetch('/api/users/1');
        const user     = await response.json();
        this.setState( {
            id      : user.id, 
            fName   : user.fName, 
            lName   : user.lName 
        } );
    }

    render() {
        return (
            <div>
            <ul>
                <li key={this.state.id}> <b>{this.state.fName}</b>: {this.state.lName}</li>
            </ul>
            </div>
        );
    }
}