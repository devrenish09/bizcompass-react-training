import { getItem, removeItem, setItem } from "../../../utils/webStorage";
import SessionTimer from "../../SessionTimer";
import TimerBase from "../TimerBase";

class Stopwatch extends TimerBase {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            seconds: 0,
            isRunning: false,
        };
    }

    componentDidMount() {
        const savedSeconds = getItem("stopwatchSeconds");
        const savedIsRunning = getItem("stopwatchIsRunning");

        if (savedSeconds !== null) {
            this.setState({ seconds: savedSeconds });
        }
        if (savedIsRunning === true) {
            this.toggleTimer();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.seconds !== this.state.seconds ||
            prevState.isRunning !== this.state.isRunning
        ) {
            setItem("stopwatchSeconds", this.state.seconds);
            setItem("stopwatchIsRunning", this.state.isRunning);
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
        this.setState((prev) => ({ isRunning: !prev.isRunning }));
    };

    reset = () => {
        clearInterval(this.timer);
        this.setState({ seconds: 0, isRunning: false });
        removeItem("stopwatchSeconds");
        removeItem("stopwatchIsRunning");
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h3>Stopwatch</h3>
                <p>Time : {this.state.seconds} Seconds</p>
                <button onClick={this.toggleTimer}>
                    {this.state.isRunning ? "Stop" : "Start"}
                </button>
                <button onClick={this.reset}>Reset</button>
                <div>
                    <SessionTimer />
                </div>
            </div>
        );
    }
}

export default Stopwatch;
