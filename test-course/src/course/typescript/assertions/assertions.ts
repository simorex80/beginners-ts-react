// https://www.tutorialsteacher.com/typescript/type-assertion

let name = "Simone";
let age = 42;

console.log(`assertions::name.typeof: ${typeof name}`); // string
console.log(`assertions::age.typeof: ${typeof age}`); // number

name = "Elisa";
age = 3;

// Required on functions parameter, inference on return (bad practice)

// const sum = (a: number, b: number): number => {
const sum = (a: number, b: number) => {
    return a + b;
}

// !!! BAD BAD BAD PRACTICE !!!

// Skip type check, downgraded to javascript

const result = sum(name as unknown as number, age);
console.log(`assertions::sum.result: ${result}`);

// Ignore type check

interface SimpleUser {
    name: string;
    email: string;
}

interface UserPhone {
    phone: number;
}

const user: SimpleUser = {
    name: "Simone",
    email: "ciao@google.com",
    // @ts-ignore
    phone: 12345678
}

const print = (userPhone: UserPhone) => {
    console.log(`assertions::userPhone.print: ${userPhone.phone}`);
}

print(user as unknown as UserPhone);

export { sum }