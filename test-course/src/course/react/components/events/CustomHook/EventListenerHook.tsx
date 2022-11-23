// https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook

// https://www.w3schools.com/react/react_customhooks.asp
// https://www.freecodecamp.org/news/how-to-create-react-hooks/
// https://www.robinwieruch.de/react-custom-hook/

import { DependencyList, useEffect } from "react";

function useEventListener(
    event_type: string,
    event_callback: (event: Event) => any
    // , deps?: DependencyList
) {

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        window.addEventListener(event_type, event_callback);
        return () => {
            window.removeEventListener(event_type, event_callback);
        };
    }, [
        event_type,
        event_callback
        // , ...(deps ? deps : [])
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */

}

export default useEventListener;
