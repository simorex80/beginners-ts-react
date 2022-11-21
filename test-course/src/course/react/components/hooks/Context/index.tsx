// https://reactjs.org/docs/hooks-reference.html#usecontext

// https://www.w3schools.com/react/react_usecontext.asp
// https://www.geeksforgeeks.org/reactjs-usecontext-hook/
// https://dmitripavlutin.com/react-context-and-usecontext/

import React, { useState } from "react";
import SubComponentA from "course/react/components/hooks/Context/SubComponentA";
import SubComponentB from "course/react/components/hooks/Context/SubComponentB";
import SubComponentC from "course/react/components/hooks/Context/SubComponentC";

interface ColorContextProps {
    foreground?: string;
    background?: string;
};

// A. CREATING THE CONTEXT
export const ColorContext = React.createContext<ColorContextProps>({});

const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

function Context() {

    console.log(`hooks:context::re-render`);

    const [colorContextProps, setColorContextProps] = useState<ColorContextProps>({});

    const handleChangeColor = () => {
        setColorContextProps({
            foreground: getRandomColor(),
            background: getRandomColor()
        });
    };

    return <div>
        <button type="button" onClick={handleChangeColor}>
            Change Color
        </button>
        {/* B. PROVIDING THE CONTEXT */}
        <ColorContext.Provider value={colorContextProps}>
            <SubComponentA />
            <SubComponentB />
            <SubComponentC />
        </ColorContext.Provider>
    </div>;

}

export default Context;
