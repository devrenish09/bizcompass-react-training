import TimerBase from "../TimerBase";

class Stopwatch extends TimerBase {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            isRunning: false,
        }
    }
    toggleTimer = () => {
        if (this.state.isRunning) {
            clearInterval(this.timer);
        } else {
            this.timer = setInterval(() => {
                this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
            }, 1000);
        }
        this.setState({ isRunning: !this.state.isRunning });
    };
    reset = () => {
        this.setState({ seconds: 0 });
    }
    render() {
        return (
            <div>
                <h3>Stopwatch</h3>
                <p>Time : {this.state.seconds} Seconds</p>
                <button onClick={this.toggleTimer}>
                    {this.state.isRunning ? "Start" : "Stop"}
                </button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;