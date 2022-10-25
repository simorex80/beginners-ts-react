// https://reactjs.org/docs/forwarding-refs.html

// https://felixgerschau.com/react-forwardref-explained/
// https://blog.logrocket.com/cleaning-up-the-dom-with-forwardref-in-react/

import { useRef } from "react";
import FancyButton from "course/react/components/ref/FancyButton";

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
