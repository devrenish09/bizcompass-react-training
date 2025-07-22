import Stopwatch from "../Stopwatch";
import TimerBase from "../TimerBase";

class Counter extends TimerBase {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            count: 0,
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    drecement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    reset = () => {
        this.setState({ count: 0 });
    }
    render() {
        return (
            <div>
                <h3>Counter App</h3>
                <p>Current Count : {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.drecement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                <p>Timer : {this.state.seconds} Seconds</p>
                <Stopwatch/>
            </div>
        )
    }
}

export default Counter;