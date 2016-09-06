import React, { Component } from 'react';

import UserItem from '../userItem'; 

import './index.less';

export default class UserList extends Component {
    render () {
        return (
            <div className="user-list">
                { this.props.users.map((user, key) => {
                    return <UserItem {...user} />
                })}
            </div>
        );
    }
}