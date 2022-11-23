// https://reactjs.org/docs/components-and-props.html

// https://www.robinwieruch.de/react-function-component/#react-function-component-example

interface HelloProps {
    user?: string;
    surname?: string;
}

function Hello(props: HelloProps) {
    return <p>
        Hello {props.user ? props.user : "John"} {props.surname ? props.surname : "Doe"}
    </p>;
}

export default Hello;
