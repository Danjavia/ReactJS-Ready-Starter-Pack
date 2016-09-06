import React, { Component } from 'react';
import Service from '../../services/Service';

import UserItem from '../userItem';


export default class UserView extends Component {

    constructor(props) {
        super(props);

		this.state = {}
    }

    componentWillMount() {

        Service.getUser(this.props.params.userId).then((data) => {

            this.setState(data);

        }).catch((e) => {
            console.log(e);
        })
    }

    componentDidMount() {

    }

    render() {
        return (
          <div className="user">
              <UserItem {...this.state}/>
          </div>
        );
    }
}
