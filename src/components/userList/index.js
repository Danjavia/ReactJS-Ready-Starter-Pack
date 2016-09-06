import React, { Component } from 'react';

import UserItem from '../userItem'; 

export default class UserList extends Component {
    render () {
        return (
            <div className="user-list">
                <h3>Users</h3>
                { this.props.users.map((user, key) => {
                    return <UserItem {...user} />
                })}
            </div>
        );
    }
}