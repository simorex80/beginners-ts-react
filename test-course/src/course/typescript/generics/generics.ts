// https://www.typescriptlang.org/docs/handbook/2/generics.html

// https://www.tutorialsteacher.com/typescript/typescript-generic
// https://www.tutorialsteacher.com/typescript/typescript-generic-interface
// https://en.wikipedia.org/wiki/Generic_programming

const names: Array<string> = ["mario", "roberto", "giovanni"];

// const chooseFirstElement = (list: string[]): string => {
//     return list[0];
// }

const chooseFirstElement = <T>(list: T[]): T => {
    return list[0];
};

console.log(`generics::names.firstElement: ${chooseFirstElement(names)}`);

const numbers: Array<number> = [1, 2, 3, 4, 5];

console.log(`generics::numbers.firstElement: ${chooseFirstElement(numbers)}`);

interface Box<T> {
    content: T;
}

const numberBox: Box<number> = {
    content: 100,
};

const stringBox: Box<string> = {
    content: "100",
};

const arrayNumberBox: Box<Array<number>> = {
    content: [100],
};

console.log(`generics::numberBox: ${JSON.stringify(numberBox)}`);
console.log(`generics::stringBox: ${JSON.stringify(stringBox)}`);
console.log(`generics::arrayNumberBox: ${JSON.stringify(arrayNumberBox)}`);

// With interface

interface SuperBox<U extends User, A> extends Box<U> {
    attribute: A;
}

interface User {
    name: string;
}

const userSuperBox1: SuperBox<User, string> = {
    content: {
        name: "Simone"
    },
    attribute: "Yellow"
};

const userSuperBox2: SuperBox<User, number> = {
    content: {
        name: "Mario"
    },
    attribute: 100
};

console.log(`generics::userSuperBox1: ${JSON.stringify(userSuperBox1)}`);
console.log(`generics::userSuperBox2: ${JSON.stringify(userSuperBox2)}`);

export { names };