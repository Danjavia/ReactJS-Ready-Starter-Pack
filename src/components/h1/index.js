import React, { Component } from 'react';

export default class H1 extends Component {
    render () {
        return (
            <h1>{this.props.title} {this.props.text}</h1>
        );
    }
}