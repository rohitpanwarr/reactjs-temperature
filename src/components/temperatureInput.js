import React, { Component } from 'react';

export default class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scaleNames: {
                'c': 'Celsius',
                'f': 'Fahrenheit'
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in {this.state.scaleNames[this.props.scale]}:</legend>
                <input value={this.props.temperature} onChange={this.handleChange} />
            </fieldset>
        )
  }
}
