import { useEffect, useState } from "react";
import socket from "../../config/Socket";

const Home = () => {
    const [connected, setConnected] = useState(false);
    const [welcomeMsg, setWelcomeMsg] = useState("");

    useEffect(() => {
        socket.on("connect", () => {
            setConnected(true);
            console.log("Connected to WebSocket:", socket.id);
            console.log("WebSocket ==========================>", socket);
        });

        socket.on("disconnect", () => {
            setConnected(false);
            console.log("Disconnected from WebSocket");
        });

        socket.on("welcome", (msg) => {
            console.log("msg=====================>", msg);
            setWelcomeMsg(msg);
        });

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("welcome");
        };
    }, []);

    return (
        <div style={{ padding: "10px" }}>
            <h3>Home Page</h3>
            <p>
                WebSocket Status:{" "}
                <strong style={{ color: connected ? "green" : "red" }}>
                    {connected ? "Connected" : "Disconnected (May be socker server not running)"}
                </strong>
            </p>
            <p>{welcomeMsg}</p>
        </div>
    );
};

export default Home;
