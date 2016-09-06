import React, { Component } from 'react';
import Service from '../../services/Service';

import UserList from '../userList';

export default class Crm extends Component {

    constructor(props) {
        super(props);

		this.state = {}
    }

    componentWillMount() {

        Service.getUsers().then((data) => {

            this.setState(data);
            console.log(data);

        }).catch((e) => {
            console.log(e);
        })
    }

    componentDidMount() {
        
    }

    render() {
        return (
          <div className="crm">
              <UserList {...this.state}/>
          </div>
        );
    }
}
