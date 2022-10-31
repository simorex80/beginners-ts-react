// https://reactjs.org/docs/forwarding-refs.html

// https://www.geeksforgeeks.org/reactjs-forwarding-refs/
// https://blog.logrocket.com/cleaning-up-the-dom-with-forwardref-in-react/
// https://felixgerschau.com/react-forwardref-explained/

import { useRef } from "react";
import FancyButton from "course/react/forward-ref/FancyButton";

function ForwardRef() {
    // You can now get a ref directly to the DOM button:
    const fancyButtonRef = useRef<HTMLButtonElement>(null);

    const onChange = () => {
        fancyButtonRef.current?.focus();
    };

    return <>
        <input type="text" onChange={onChange}></input>
        <FancyButton ref={fancyButtonRef}>Click me!</FancyButton>
    </>;
}

export default ForwardRef;
