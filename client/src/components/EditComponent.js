import React, { Component } from 'react';

export default class EditComponent extends Component {
  state = { users: [] };

  async componentDidMount() {
    const response = await fetch('/api/users');
    const users    = await response.json();
    this.setState({users: users});
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map( city => {
            return <li key={city.id}> <b>{city.fName}</b>: {city.lName}</li>
          })}
        </ul>
      </div>
    );
  }
}