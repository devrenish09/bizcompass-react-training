import { useEffect, useRef, useState } from "react";

const SESSION_SECONDS_KEY = "session_timer_seconds";
const SESSION_RUNNING_KEY = "session_timer_running";

const SessionTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const savedSeconds = sessionStorage.getItem(SESSION_SECONDS_KEY);
    const savedRunning = sessionStorage.getItem(SESSION_RUNNING_KEY);

    if (savedSeconds !== null) setSeconds(Number(savedSeconds));
    if (savedRunning === "true") setIsRunning(true);
  }, []);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  useEffect(() => {
    sessionStorage.setItem(SESSION_SECONDS_KEY, seconds.toString());
    sessionStorage.setItem(SESSION_RUNNING_KEY, isRunning.toString());
  }, [seconds, isRunning]);

  // sync between tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.storageArea === sessionStorage) {
        if (e.key === SESSION_SECONDS_KEY) {
          setSeconds(Number(e.newValue) || 0);
        } else if (e.key === SESSION_RUNNING_KEY) {
          setIsRunning(e.newValue === "true");
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleTimer = () => setIsRunning((prev) => !prev);

  const reset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setSeconds(0);
    sessionStorage.removeItem(SESSION_SECONDS_KEY);
    sessionStorage.removeItem(SESSION_RUNNING_KEY);
  };

  return (
    <div>
      <h3>Session Timer (Multi-tab sync)</h3>
      <p>Time: {seconds} seconds</p>
      <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default SessionTimer;
