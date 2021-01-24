import React, {Component} from "react";

class CounterDisplay extends Component {

    render(){
        return <h1>{this.props.value}</h1>;
    }
}

export default CounterDisplay;