import React, { Component } from "react";
import './temperature.css';

export default class Temperature extends Component {
	state = {
        scale: 'c',
		temp: 0,
	};

	handleChangeFahrenheit = (e) => {
		this.setState({ scale: 'f', temp: e.target.value });
        console.log(e.target.value + 'f')
	}
	handleChangeCelsius = (e) => {
		this.setState({ scale: 'c', temp: e.target.value });
        console.log(e.target.value + 'c')
	}
	render() {

        const temp = this.state.temp;
        const scale = this.state.scale;
        let error;
        let fahrenheit = scale === 'c' ? (temp * 9) / 5 + 32 : temp;
        let celsius = scale === 'f' ? (temp - 32) * 5 / 9 : temp;
        if (isNaN(fahrenheit)|| isNaN(celsius)) {
            error = <p className="error">Please Enter A Number</p>
        }
		return (
            <div className="content">
                <div className="content__converter">
                    <label htmlFor='fahrenheit'>fahrenheit</label>
                    <input
                        id='fahrenheit'
                        value={fahrenheit}
                        onChange={this.handleChangeFahrenheit}
                    />
                </div>

                <div className="content__converter">
                    <label htmlFor='celsius'>celsius</label>
                    <input
                        id='celsius'
                        value={celsius}
                        onChange={this.handleChangeCelsius}
                    />
                </div>
                {error}
			</div>
		);
	}
}
