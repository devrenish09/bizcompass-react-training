import { Component } from "react";

class TimerBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
}
export default TimerBase;