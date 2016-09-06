import React, { Component } from 'react';

export default class UserItem extends Component {
    render () {
        return (
            <div className="user-list__item" id={this.props.id}>
                <h1>{this.props.username}</h1>
                <strong>{this.props.email}</strong>
            </div>
        );
    }
}