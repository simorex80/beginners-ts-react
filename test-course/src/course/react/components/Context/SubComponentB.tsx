
import { useContext } from "react";
import { ColorContext } from ".";

function SubComponentB() {

    const colorContextProps = useContext(ColorContext);

    return <div style={{
        background: colorContextProps.background,
        color: colorContextProps.foreground
    }}>
        ComponentB
    </div>;
}

export default SubComponentB;
