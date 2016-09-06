import React, { Component } from 'react';
import { Link } from 'react-router';

import './index.less';

export default class UserItem extends Component {
    render () {
        return (
            <div className="user-list__item" id={this.props.id}>
                <h2>{this.props.username}</h2>
                <div>{this.props.email}</div>
                <Link to={`crm/${this.props.id}`}>Ver mas de este usuario</Link>
            </div>
        );
    }
}