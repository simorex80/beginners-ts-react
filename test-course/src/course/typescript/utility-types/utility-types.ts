// https://www.typescriptlang.org/docs/handbook/utility-types.html

interface User {
    readonly id: number,
    name: string,
    surname: string,
    age?: number,
    enabled: boolean,
};

const user: User = {
    id: 53156,
    name: "Simone",
    surname: "Di Luzio",
    enabled: true,
};

console.log(`utility-types::user: ${JSON.stringify(user)}`);

// interface UserWithoutId { // Or BaseUser ...
//     name: string,
//     surname: string,
//     enabled: boolean,
// }

// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
// Tips: Usefull on DTO mapping

type UserWithoutId = Omit<User, "id">;

const userWithoutId: UserWithoutId = {
    name: "Mario",
    surname: "Bianchi",
    enabled: true
};

userWithoutId.age = 24;

console.log(`utility-types::userWithoutId: ${JSON.stringify(userWithoutId)}`);

// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype

type PartialUser = Partial<User>;

const partialUser: PartialUser = {
    name: "Paolo",
    surname: "Rossi",
};

partialUser.age = 31;

console.log(`utility-types::partialUser: ${JSON.stringify(partialUser)}`);

// https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype

type RequiredUser = Required<User>;

const requiredUser: RequiredUser = {
    id: 53156,
    name: "Enzo",
    surname: "Neri",
    age: 42,
    enabled: true,
};

console.log(`utility-types::requiredUser: ${JSON.stringify(requiredUser)}`);

// https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype

type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = {
    id: 53156,
    name: "Gianni",
    surname: "Celeste",
    enabled: true,
};

// readonlyUser.age = 22; <- DISALLOWED

console.log(`utility-types::readonlyUser: ${JSON.stringify(readonlyUser)}`);

export type { User };