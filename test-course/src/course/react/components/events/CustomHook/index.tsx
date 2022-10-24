// https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook

// https://www.freecodecamp.org/news/how-to-create-react-hooks/
// https://www.robinwieruch.de/react-custom-hook/

import { useState } from "react";
import useEventListener from "./EventListenerHook";

function CustomHook() {

    let [key, setKey] = useState<string>("");

    const handleKeyUp = (event: KeyboardEvent) => {
        console.log(`events:customHook::handleKeyUp:key ${event.key}`);
        setKey(event.key);
    };

    useEventListener("keyup", (event: Event) => {
        if (event instanceof KeyboardEvent) {
            handleKeyUp(event);
        }
    });

    return <>
        <div style={{
            height: "10%",
            width: "10%",
            margin: "auto",
            background: "blue"
        }}>Event by CustomHook</div>
        <div>
            <p>Key pressed: {key}</p>
        </div>
    </>;
}

export default CustomHook;
