// https://reactjs.org/docs/forwarding-refs.html

// https://felixgerschau.com/react-forwardref-explained/
// https://blog.logrocket.com/cleaning-up-the-dom-with-forwardref-in-react/

import React, { ReactNode } from "react";

interface FancyButtonProps {
    children: ReactNode;
}

const FancyButton = React.forwardRef<HTMLButtonElement, FancyButtonProps>((props, ref) => (
    <button ref={ref}>
        {props.children}
    </button>
));

export default FancyButton;
