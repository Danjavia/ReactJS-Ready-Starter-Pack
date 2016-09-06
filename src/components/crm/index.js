import React, { Component } from 'react';
import Service from '../../services/Service';

import UserList from '../userList';

export default class Crm extends Component {

    constructor(props) {
        super(props);

		this.state = {
            users: []
        }
    }

    componentWillMount() {

        Service.getUsers().then((data) => {

            this.setState({
                users: data,
            });
        }).catch((e) => {
            console.log(e);
        })
    }

    componentDidMount() {
        
    }

    render() {
        return (
          <div className="crm">
              <h3>Users</h3>
              <UserList users={this.state.users}/>
          </div>
        );
    }
}
