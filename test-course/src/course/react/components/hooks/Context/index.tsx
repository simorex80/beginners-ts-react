// https://reactjs.org/docs/hooks-reference.html#usecontext

// https://dmitripavlutin.com/react-context-and-usecontext/
// https://www.geeksforgeeks.org/reactjs-usecontext-hook/

import React, { useState } from "react";
import SubComponentA from "course/react/components/hooks/Context/SubComponentA";
import SubComponentB from "course/react/components/hooks/Context/SubComponentB";
import SubComponentC from "course/react/components/hooks/Context/SubComponentC";

interface ColorContextProps {
    foreground: string;
    background: string;
};

export const ColorContext = React.createContext<ColorContextProps>({
    foreground: "#FFFFFF",
    background: "#000000"
});

const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

function Context() {

    console.log(`hooks:context::re-render`);

    const [colorContextProps, setColorContextProps] = useState<ColorContextProps>({
        foreground: getRandomColor(),
        background: getRandomColor()
    });

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
        <ColorContext.Provider value={colorContextProps}>
            <SubComponentA />
            <SubComponentB />
            <SubComponentC />
        </ColorContext.Provider>
    </div>;

}

export default Context;
