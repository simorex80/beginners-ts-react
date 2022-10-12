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
    }
}

// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript

// type SimpleUser = {
//     name: string;
//     surname: string;
//     // welcome: () => number; // arrow function
//     welcome(): string;
// }

// Merged SimpleUser

const simpleUser1: SimpleUser = {
    name: "Simone",
    surname: "Di Luzio",
    welcome: function (): string {
        return `hello ${this.name}, how are you?`;
    }
}

// Optional property 

// console.log(objects::simpleUser1.address ? simpleUser1.address.number : "");
// console.log(objects::simpleUser1.address && simpleUser1.address.number);
console.log(`objects::simpleUser1.address?.number: ${simpleUser1.address?.number}`);

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
}

// Spread object creation

const user2: User = {
    ...user1,
    year_of_birth: 1980,
}

export { simpleUser1, user1, user2 }
export type { SimpleUser, User }
