// https://reactjs.org/docs/components-and-props.html
// https://www.robinwieruch.de/react-function-component/#react-function-component-example

interface HelloExProps {
    user?: string;
    enabled?: boolean;
}

function HelloEx(props: HelloExProps) {
    return <>
        {props.enabled && render(props)}
    </>;
}

function render(props: HelloExProps) {
    return <p>Hello {props.user ? props.user : "John Doe"}</p>;
}

export default HelloEx;
