import React, { Component } from 'react';

export default class CreateComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fName: '',
            lName: ''
        }
    }
    onChangeFirstName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            port: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(`First name is ${this.state.fName} and Last Name is ${this.state.lName}`);
        this.setState({
            fName: '',
            lName: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New User</h3>
                <form>
                    <div className="form-group">
                        <label>First Name:  </label>
                        <input type="text" value={this.state.fName} className="form-control" onChange={this.onChangeFirstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" value={this.state.lName} className="form-control" onChange={this.onChangeLastName}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}