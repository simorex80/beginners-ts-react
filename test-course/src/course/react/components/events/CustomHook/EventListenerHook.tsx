// https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook

// https://www.freecodecamp.org/news/how-to-create-react-hooks/
// https://www.robinwieruch.de/react-custom-hook/

import { DependencyList, useEffect } from "react";

function useEventListener(type: string, callback: (event: Event) => any, deps?: DependencyList) {

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        window.addEventListener(type, callback);
        return () => {
            window.removeEventListener(type, callback);
        };
    }, [type, callback, ...(deps ? deps : [])]);
    /* eslint-enable react-hooks/exhaustive-deps */

}

export default useEventListener;
