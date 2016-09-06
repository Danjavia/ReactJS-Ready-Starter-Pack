import React, { Component } from 'react';

import './index.less';

export default class UserItem extends Component {
    render () {
        return (
            <div className="user-list__item" id={this.props.id}>
                <h2>{this.props.username}</h2>
                <strong>{this.props.email}</strong>
            </div>
        );
    }
}