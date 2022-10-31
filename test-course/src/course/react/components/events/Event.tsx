// https://reactjs.org/docs/handling-events.html

// https://www.w3schools.com/react/react_events.asp
// https://www.knowledgehut.com/blog/web-development/handling-react-events-guide
// https://www.javatpoint.com/react-events

import { MouseEvent, useEffect, useState } from "react";

function Event() {

    let [clickCoordinates, setClickCoordinates] = useState<string>("");
    let [key, setKey] = useState<string>("");

    const handleKeyUp = (event: KeyboardEvent) => {
        console.log(`events:event::handleKeyUp:key ${event.key}`);
        setKey(event.key);
    };

    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    const handleOnClick = (event: MouseEvent) => {
        const coord = `${event.clientX}/${event.clientY}`;
        console.log(`events:event::handleOnClick:coordinates ${coord}`);
        setClickCoordinates(coord);
    };

    return <>
        <div style={{
            height: "10%",
            width: "10%",
            margin: "auto",
            background: "blue"
        }} onClick={handleOnClick}>Event</div>
        <div>
            <p>Click Coordinates: {clickCoordinates}</p>
            <p>Key pressed: {key}</p>
        </div>
    </>;
}

export default Event;
