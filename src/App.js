import React, {Fragment} from 'react';
import CounterDisplay from "./components/CounterDisplay";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value:0,
        step:1,
    };
}
incrementCounter =()=> {
    this.setState({
      value:this.state.value + this.state.step,
    });
};
decrementCounter =()=> {
    this.setState({
      value:this.state.value - this.state.step,
    });
};

setStep = newStep => {
        this.setState({
            step:newStep,
        });
};


render () {
    return(
        <Fragment>
          <CounterDisplay value={this.state.value}/>
          <button onClick={this.decrementCounter}>-</button>
          <button onClick={this.incrementCounter}>+</button>
            <input type="number" value={this.state.step} onChange={(e)=>{
                this.setStep(Number(e.currentTarget.value));
            }}/>
        </Fragment>
    );
}
}
export default App;