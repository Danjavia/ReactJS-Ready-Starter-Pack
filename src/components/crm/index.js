import React, { Component } from 'react';
import Service from '../../services/Service';

import H1 from '../h1';

export default class Crm extends Component {

    constructor(props) {
        super(props);

		this.state = {}
    }

    componentWillMount() {

        Service.getUsers().then((data) => {
            this.setState(data);
        }).catch((e) => {
            console.log(e);
        })
    }

    componentDidMount() {
        
    }

    render() {
        return (
          <div className="crm">
              <H1 {...this.state}/>
          </div>
        );
    }
}
