// https://reactjs.org/docs/introducing-jsx.html
// https://www.typescriptlang.org/docs/handbook/jsx.html

import React from "react";

const name = "John Doe";

const contentHello =
    <div>
        <h2>Hello</h2>
    </div>;

// const contentHello = 
// <div>
//     <h2>Hello</h2>
// </div>
// <div></div>; <- JSX expressions must contain only one parent element

// https://www.javatpoint.com/react-fragments

const contentHello2 =
    <React.Fragment>
        <h2>Hello</h2>
        <h3>{name}</h3>
    </React.Fragment>;

// or

const contentHello3 =
    <>
        <h2>Hello</h2>
        <h3>{name}</h3>
    </>;

// const functionHello = (user: string): JSX.Element => {
const functionHello = (user: string) => {
    return <p>Hello {user}</p>;
};

export { contentHello, contentHello2, contentHello3, functionHello };