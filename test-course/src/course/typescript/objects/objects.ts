// https://www.typescriptlang.org/docs/handbook/2/objects.html

// https://www.tutorialsteacher.com/typescript/typescript-interface

interface SimpleUser {
    name: string;
    surname: string;
}

interface SimpleUser {
    // welcome: () => number; // arrow function
    welcome(): string;
    address?: {
        street: string,
        number: string;
    };
}

// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript

// type SimpleUser = {
//     name: string;
//     surname: string;
//     // welcome: () => string; // arrow function
//     welcome(): string;
// }

// Merged SimpleUser

const simpleUser1: SimpleUser = {
    name: "Simone",
    surname: "Di Luzio",
    welcome: function (): string {
        return `hello ${this.name}, how are you?`;
    }
};

// Optional property 

// console.log(objects::simpleUser1.address ? simpleUser1.address.number : "");
// console.log(objects::simpleUser1.address && simpleUser1.address.number);
console.log(`objects::simpleUser1.address?.number: ${simpleUser1.address?.number}`);
const address_number = simpleUser1.address && simpleUser1.address.number;
console.log(`objects::simpleUser1.address?.number: ${address_number}`);

// https://www.typescriptlang.org/docs/handbook/2/objects.html

interface User extends SimpleUser {
    // Optional
    year_of_birth?: number;
    age: () => number;
}

const user1: User = {
    name: "Simone",
    surname: "Di Luzio",
    welcome: function (): string {
        return this.name + this.surname;
    },
    age: function (): number {
        return (this.year_of_birth) ? (new Date().getFullYear() - this.year_of_birth) : 0;
    }
};
console.log(`objects::user1.year_of_birth: ${user1.year_of_birth}`);

// Spread object creation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const user2: User = {
    ...user1,
    year_of_birth: 1980,
};
console.log(`objects::user2.year_of_birth: ${user1.year_of_birth}`);

export { simpleUser1, user1, user2 };
export type { SimpleUser, User };
