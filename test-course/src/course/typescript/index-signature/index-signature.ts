// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

interface User {
    name: string,
    surname: string,
}

interface UserDictionary {
    admin: User,
    [id: string]: User,
    // counter: number <- DISALLOWED
}

const userDictionary: UserDictionary = {
    admin: {
        name: "Admin",
        surname: "Admin",
    },
    udewfsewr: {
        name: "Mario",
        surname: "Rossi",
    },
    h3034rnfd: {
        name: "Paolo",
        surname: "Bianchi",
    },
    sdfdsr23d: {
        name: "Sergio",
        surname: "Neri",
    }
};

console.log(`index-signature::userDictionary.h3034rnfd: ${JSON.stringify(userDictionary)}`);
console.log(`index-signature::userDictionary.h3034rnfd: ${JSON.stringify(userDictionary.admin)}`);
console.log(`index-signature::userDictionary.h3034rnfd: ${JSON.stringify(userDictionary.sdfdsr23d)}`);

// Mixed with enum

enum WeekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

interface Statistics {
    views: {
        [day in WeekDay]: number;
    };
    enabled?: {
        [day in WeekDay]: boolean;
    };
}

const statistics: Statistics = {
    views: {
        [WeekDay.Monday]: 1,
        [WeekDay.Tuesday]: 1,
        [WeekDay.Wednesday]: 3,
        [WeekDay.Thursday]: 4,
        [WeekDay.Friday]: 2,
        [WeekDay.Saturday]: 1,
        [WeekDay.Sunday]: 0
    }
};

console.log(`index-signature::statistics: ${JSON.stringify(statistics)}`);

export { userDictionary, statistics };
export type { User, UserDictionary, WeekDay, Statistics };