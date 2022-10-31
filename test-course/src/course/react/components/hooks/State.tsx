// https://reactjs.org/docs/hooks-state.html

// https://www.w3schools.com/react/react_usestate.asp
// https://www.geeksforgeeks.org/what-is-usestate-in-react/
// https://dmitripavlutin.com/react-usestate-hook-guide/
// https://www.developerway.com/posts/react-re-renders-guide

function State() {

    console.log(`hooks:state::re-render`);

    let millisecond: number = Date.now();

    function changeValues() {
        console.log(`hooks:state::changeName::old_millisecond: ${millisecond}`);
        millisecond = Date.now();
    }

    return <div>
        <p>MS: {millisecond}</p>
        <button onClick={changeValues}>Change</button>
    </div>;
}

// import { useState } from "react";

// function State() {

//     console.log(`hooks:state::re-render`);

//     let [millisecond, setMillisecond] = useState<number>(Date.now());
//     let [date, setDate] = useState<Date>(new Date());
//     let [counter, setCounter] = useState<number>(0);

//     const summary = `${millisecond} - ${date.toString()} - ${counter}`;

//     function changeValues() {
//         setMillisecond(Date.now());
//         setDate(new Date());
//         // https://betterprogramming.pub/synchronous-state-in-react-using-hooks-dc77f43d8521
//         // https://medium.com/codex/all-about-react-usestate-hook-54b432d61be3
//         // PASS THE CURRENT VALUE (React is async)
//         setCounter((counter) => counter + 1);
//     }

//     return <div>
//         <p>MS: {millisecond}</p>
//         <p>Date: {date.toString()}</p>
//         <p>Counter: {counter}</p>
//         <p>Summary: {summary}</p>
//         <button onClick={changeValues}>Change</button>
//     </div>;
// }

export default State;
