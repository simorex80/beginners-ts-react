// https://reactjs.org/docs/uncontrolled-components.html

// https://www.geeksforgeeks.org/controlled-vs-uncontrolled-components-in-reactjs/
// https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/

import { FormEvent, useRef, useState } from "react";

type Sex = "" | "M" | "F";

function Uncontrolled() {

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const nameElement = formRef.current?.elements.namedItem('name') as HTMLInputElement;
        const surnameElement = formRef.current?.elements.namedItem('surname') as HTMLInputElement;
        const sexElement = formRef.current?.elements.namedItem('sex') as HTMLSelectElement;

        console.log(`input:uncontrolled::submit::name: ${nameElement.value}`);
        console.log(`input:uncontrolled::submit::surname: ${surnameElement.value}`);
        console.log(`input:uncontrolled::submit::sex: ${sexElement.value}`);

        nameElement.value = "";
        surnameElement.value = "";
        sexElement.value = "";
    };

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault();

    //     // @ts-ignore
    //     console.log(`input:uncontrolled::submit::name: ${event.target.name.value}`);
    //     // @ts-ignore
    //     console.log(`input:uncontrolled::submit::surname: ${event.target.surname.value}`);
    //     // @ts-ignore
    //     console.log(`input:uncontrolled::submit::sex: ${event.target.sex.value}`);

    //     // @ts-ignore
    //     event.target.name.value = "";
    //     // @ts-ignore
    //     event.target.surname.value = "";
    //     // @ts-ignore
    //     event.target.sex.value = "";
    // };

    return <div>
        <form ref={formRef} onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" required />
            </label>
            <br />
            <label>
                Surname:
                <input type="text" name="surname" required />
            </label>
            <br />
            <label>
                Sex:
                <select name="sex" required>
                    <option value=""></option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>;

}

export default Uncontrolled;
