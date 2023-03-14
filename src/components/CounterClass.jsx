import React from "react";

class CounterClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h2>{`CounterClass = ${this.state.count}`}</h2>
                <button onClick={this.increment}>+ 1</button>
                <button onClick={this.decrement}>- 1</button>
            </div>
        )
    }
}

export default CounterClass