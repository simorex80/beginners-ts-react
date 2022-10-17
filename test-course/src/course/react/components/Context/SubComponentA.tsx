import { useContext } from "react";
import { ColorContext } from ".";

function SubComponentA() {

    const colorContextProps = useContext(ColorContext);

    return <div style={{
        background: colorContextProps.background,
        color: colorContextProps.foreground
    }}>
        ComponentA
    </div>;
}

export default SubComponentA;
