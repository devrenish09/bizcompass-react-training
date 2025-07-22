import React, { useEffect, useState } from 'react'

const TimeZone = () => {
    const currentDate = new Date();
    const myDate = new Date(2023, 10, 15); // November 15, 2023
    const [currentTime, setCurrentTime] = useState(new Date());
    const [localTime, setLocalTime] = useState("");
    const [localTimeIndia, setLocalTimeIndia] = useState("");
    const [timezone, setTimezone] = useState("Asia/Kolkata");
    const digit = 4.9;
    const [formData, setFormData] = useState({
        fromDate: '',
        fromTime: '',
        toDate: '',
        toTime: '',
    });
    const [error, setError] = useState('');

    const validateDateTime = (fromDate, fromTime, toDate, toTime) => {
        if (!fromDate || !fromTime || !toDate || !toTime) {
            return 'All fields (From Date, From Time, To Date, and To Time) are required';
        }
        const fromDateTimeISO = new Date(`${fromDate}T${fromTime}:00`).toISOString();
        const toDateTimeISO = new Date(`${toDate}T${toTime}:00`).toISOString();
        console.log("fromDateTimeISO=================>",fromDateTimeISO);
        console.log("toDateTimeISO=================>",toDateTimeISO);
        if (fromDateTimeISO > toDateTimeISO) {
            return 'From Date and Time cannot be greater than To Date and Time';
        }

        return null;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationError = validateDateTime(formData.fromDate, formData.fromTime, formData.toDate, formData.toTime);

        if (validationError) {
            setError(validationError);
        } else {
            setError('');
            alert('Form submitted successfully!');
        }
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(currentDate);
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const displayTimeInTimezone = (date, timezone) => {
        return date.toLocaleString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    useEffect(() => {
        const utcDate = "2025-07-21T10:00:00Z"; // Example UTC timestamp received from backend

        // Convert UTC to selected timezone using user's input
        const localDate = new Date(utcDate);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: timezone, // User-selected timezone
        }).format(localDate);

        setLocalTime(formattedDate);
    }, [timezone]);

    useEffect(() => {
        // UTC timestamp from backend
        const utcDate = "2025-07-21T10:00:00Z"; // UTC time (ISO format)
        const localDate = new Date(utcDate);

        const formattedDate = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }).format(localDate);

        setLocalTimeIndia(formattedDate);
    }, []);


    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // getMonth() returns 0-11
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fromDate">From Date:</label>
                    <input
                        type="date"
                        id="fromDate"
                        name="fromDate"
                        value={formData.fromDate}
                        onChange={handleChange}
                    />
                    <label htmlFor="fromTime">From Time:</label>
                    <input
                        type="time"
                        id="fromTime"
                        name="fromTime"
                        value={formData.fromTime}
                        onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="toDate">To Date:</label>
                    <input
                        type="date"
                        id="toDate"
                        name="toDate"
                        value={formData.toDate}
                        onChange={handleChange}
                    />
                    <label htmlFor="toTime">To Time:</label>
                    <input
                        type="time"
                        id="toTime"
                        name="toTime"
                        value={formData.toTime}
                        onChange={handleChange}
                    />
                    <br />

                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <h2>Current Date and Time</h2>
                <p>{currentDate.toString()}</p>
                <p>Date: {formattedDate}</p>
                <p>Time: {formattedTime}</p>
            </div>
            <div>
                <h2>Specific Date</h2>
                <p>{myDate.toDateString()}</p>
            </div>
            <div>
                <h2>Global Time Display</h2>
                <p>Current Local Time: {currentTime.toLocaleString()}</p>
                <p>
                    Time in New York (EST):{' '}
                    {displayTimeInTimezone(currentTime, 'America/New_York')}
                </p>
                <p>
                    Time in London (GMT/BST):{' '}
                    {displayTimeInTimezone(currentTime, 'Europe/London')}
                </p>
                <p>
                    Time in Tokyo (JST):{' '}
                    {displayTimeInTimezone(currentTime, 'Asia/Tokyo')}
                </p>
            </div>
            <div>
                <h2>Formatted Time in Selected Timezone:</h2>
                <select onChange={(e) => setTimezone(e.target.value)} value={timezone}>
                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                    <option value="America/New_York">America/New_York</option>
                    <option value="Europe/London">Europe/London</option>
                    <option value="Australia/Sydney">Australia/Sydney</option>
                </select>
                <p>{localTime}</p>
            </div>
            <div>
                <h2>Localtime</h2>
                <p>{localTimeIndia}</p>
            </div>
            <div>
                <h2>Math Object of {digit}</h2>
                <p>Math Round : {Math.round(digit)}</p>
                <p>Math.round(x) returns the nearest integer.</p>
                <p>Math Ceil : {Math.ceil(digit)}</p>
                <p>Math.ceil(x) returns the value of x rounded up to its nearest integer.</p>
                <p>Math Floor : {Math.floor(digit)}</p>
                <p>Math.floor(x) returns the value of x rounded down to its nearest integer.</p>
                <p>Math Trunc : {Math.trunc(digit)}</p>
                <p>Math.trunc(x) returns the integer part of x</p>
            </div>
        </div>
    )
}

export default TimeZone;