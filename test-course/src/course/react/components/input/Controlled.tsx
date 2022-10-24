// https://reactjs.org/docs/forms.html#controlled-components

// https://www.geeksforgeeks.org/what-are-controlled-components-in-reactjs

import { FormEvent, useState } from "react";

type Sex = "" | "M" | "F";

function Controlled() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [sex, setSex] = useState<Sex>("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        console.log(`input:controlled::submit::name: ${name}`);
        console.log(`input:controlled::submit::surname: ${surname}`);
        console.log(`input:controlled::submit::sex: ${sex}`);

        setName("");
        setSurname("");
        setSex("");
    };

    return <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name [{name}]:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                Surname [{surname}]:
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
            </label>
            <br />
            <label>
                Sex [{sex}]:
                <select value={sex} onChange={(e) => setSex(e.target.value as Sex)} required>
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

export default Controlled;
