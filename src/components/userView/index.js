import React, { Component } from 'react';
import Service from '../../services/Service';


export default class UserView extends Component {

    constructor(props) {
        super(props);

		this.state = {
            user: null
        }
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
              <h1>{this.state.name}</h1>
              <h3>{this.state.username}</h3>
              <a href={`mailto:${this.state.email}`}><strong>{this.state.email}</strong></a>
          </div>
        );
    }
}
