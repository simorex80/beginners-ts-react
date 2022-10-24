import { useContext } from "react";
import { ColorContext } from "course/react/components/hooks/Context";

function SubComponentB() {

    const colorContextProps = useContext(ColorContext);

    return <div style={{
        height: "10%",
        width: "10%",
        margin: "auto",
        background: colorContextProps.background,
        color: colorContextProps.foreground
    }}>
        ComponentB
    </div>;
}

export default SubComponentB;
