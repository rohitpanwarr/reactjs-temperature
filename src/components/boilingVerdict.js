import React, { Component } from 'react';

export default class BoilingVerdict extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.temperature >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
}
