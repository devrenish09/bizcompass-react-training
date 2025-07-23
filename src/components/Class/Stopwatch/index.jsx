import { getItem, removeItem, setItem } from "../../../utils/webStorage";
import TimerBase from "../TimerBase";

class Stopwatch extends TimerBase {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            seconds: 0,
            isRunning: false,
            inputHours: 0,
            inputMinutes: 0,
            inputSeconds: 0,
            finished: false,
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

        // Check if time is up
        if (this.state.isRunning && this.state.seconds <= 0 && !this.state.finished) {
            clearInterval(this.timer);
            this.setState({ isRunning: false, finished: true });
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    //to start/pause stop watch timer
    startPauseTimer = () => {
        if (this.state.isRunning) {
            clearInterval(this.timer);
            this.setState({ isRunning: false });
        } else {
            if (this.state.seconds <= 0) {
                alert("Please set a valid time!");
                return;
            }

            this.timer = setInterval(() => {
                this.setState((prevState) => ({
                    seconds: prevState.seconds - 1,
                }));
            }, 1000);

            this.setState({ isRunning: true, finished: false });
        }
    };

    //to start and pause timer it's different 
    toggleTimer = () => {
        if (this.state.isRunning) {
            clearInterval(this.timer);
            this.setState({ isRunning: false });
        } else {
            if (this.state.seconds <= 0) {
                alert("Please set a valid time!");
                return;
            }

            this.timer = setInterval(() => {
                this.setState((prevState) => ({
                    seconds: prevState.seconds - 1,
                }));
            }, 1000);

            this.setState({ isRunning: true, finished: false });
        }
    };

    //handle timer inputs changes
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value) || 0,
        });
    };

    //set time entries after desired values inputs
    setTimeFromInput = () => {
        const { inputHours, inputMinutes, inputSeconds } = this.state;

        if (inputHours < 0 || inputMinutes < 0 || inputSeconds < 0) {
            alert("Time values cannot be negative!");
            return;
        }

        const totalSeconds = inputHours * 3600 + inputMinutes * 60 + inputSeconds;

        // Must be more than 15 seconds
        if (totalSeconds <= 15) {
            alert("Total time must be more than 15 seconds.");
            return;
        }

        this.setState({
            seconds: totalSeconds,
            initialTime: totalSeconds,
            finished: false,
        });
    };

    // formate timer to display like ... 01 h : 45 m : 25 s
    formatTime = (totalSeconds) => {
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");

        return `${hours} h : ${minutes} m : ${seconds} s`;
    };

    //reset to default
    reset = () => {
        clearInterval(this.timer);
        this.setState({
            seconds: this.state.initialTime,
            isRunning: false,
            finished: false,
            inputHours: 0,
            inputMinutes: 0,
            inputSeconds: 0,
            initialTime: 0,
        });
        removeItem("stopwatchSeconds");
        removeItem("stopwatchIsRunning");
    };


    render() {
        const { seconds, isRunning, finished } = this.state;

        return (
            <div style={{ textAlign: "center" }}>
                <h3>Stopwatch</h3>
                <div>
                    <input
                        type="number"
                        name="inputHours"
                        placeholder="Hours"
                        min="0"
                        onChange={this.handleInputChange}
                        style={{ width: 60, marginRight: 5 }}
                    />
                    <input
                        type="number"
                        name="inputMinutes"
                        placeholder="Minutes"
                        onChange={this.handleInputChange}
                        style={{ width: 70, marginRight: 5 }}
                        min="0"
                    />
                    <input
                        type="number"
                        name="inputSeconds"
                        placeholder="Seconds"
                        min="0"
                        onChange={this.handleInputChange}
                        style={{ width: 70 }}
                    />
                    <button
                        onClick={this.setTimeFromInput}
                        disabled={
                            this.state.inputHours * 3600 +
                            this.state.inputMinutes * 60 +
                            this.state.inputSeconds <= 15
                        }
                    >
                        Set Time
                    </button>
                </div>

                <p
                    style={{
                        fontSize: "2rem",
                        marginTop: 20,
                        color: finished ? "red" : "black",
                        animation: finished ? "blink 1s step-start infinite" : "none",
                    }}
                >
                    Time Left: {this.formatTime(seconds)}
                </p>


                <div style={{ marginTop: 20 }}>
                    <button onClick={this.startPauseTimer} style={{ marginRight: 10 }}>
                        {isRunning ? "Pause" : "Start"}
                    </button>
                    <button onClick={this.reset}>
                        Reset
                    </button>
                </div>

                <style>{`
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}</style>
            </div>
        );
    }
}

export default Stopwatch;
