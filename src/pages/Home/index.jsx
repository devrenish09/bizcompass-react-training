import { useEffect, useState } from "react";
import socket from "../../config/Socket";

const Home = () => {
    const [connected, setConnected] = useState(false);
    const [welcomeMsg, setWelcomeMsg] = useState("");

    useEffect(() => {
        socket.on("connect", () => {
            setConnected(true);
            console.log("🟢 Connected to WebSocket:", socket.id);
            console.log("WebSocket ==========================>", socket);
        });

        socket.on("disconnect", () => {
            setConnected(false);
            console.log("🔴 Disconnected from WebSocket");
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
        <div style={{ padding: "20px" }}>
            <h1>Home Page</h1>
            <p>
                WebSocket Status:{" "}
                <strong style={{ color: connected ? "green" : "red" }}>
                    {connected ? "Connected ✅" : "Disconnected ❌"}
                </strong>
            </p>
            <p>{welcomeMsg}</p>
        </div>
    );
};

export default Home;
