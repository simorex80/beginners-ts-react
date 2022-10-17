
import { useContext } from "react";
import { ColorContext } from ".";

function SubComponentC() {

    const colorContextProps = useContext(ColorContext);

    return <div style={{
        background: colorContextProps.background,
        color: colorContextProps.foreground
    }}>
        ComponentC
    </div>;
}

export default SubComponentC;
