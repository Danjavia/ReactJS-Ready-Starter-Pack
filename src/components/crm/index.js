import React, { Component } from 'react';
import request from 'superagent';

import H1 from '../h1';

export default class Crm extends Component {

    constructor(props) {
        super(props);

		this.state = {}
    }

    componentWillMount() {
        request.get('https://sheetsu.com/apis/v1.0/33dcdcd9')
            .end(function(err, res) {
                if (!err) {
                    this.setState(res.body);
                }
            }.bind(this));
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
