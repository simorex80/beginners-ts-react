// https://www.typescriptlang.org/docs/handbook/enums.html

// https://www.tutorialsteacher.com/typescript/typescript-enum

enum Position {
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right"
}

interface Square {
    position: Position;
}

const getNumberFromPosition = (position: Position): number => {
    switch (position) {
        case Position.Top:
            return 1;
        case Position.Bottom:
            return -1;
        case Position.Left:
            return 2;
        case Position.Right:
            return -2;
    }
};

enum Status {
    NotActive = 0,
    Active = 1,
    Disabled = 2,
    Paused = 3
}

// From enum to literal

type PositionLiteral = `${Position}`;

// From string to enum

const asEnum = <
    T extends { [key: string]: string; },
    K extends keyof T & string
>(
    enumObject: T,
    value: `${T[K]}`
): T[K] => {
    if (Object.values(enumObject).includes(value)) {
        return (value as unknown) as T[K];
    } else {
        throw new Error('Value provided was not found in Enum');
    }
};

const position: Position = asEnum(Position, "top");

// https://howtodoinjava.com/typescript/equals-vs-strict-equals/

// Check string to enum

const position2: string = "bottom";

if (position2 === Position.Bottom) {
    console.log(`enums::status: ${position2}`);
}

// Check number to enum

const status: number = 0;

if (status === Status.NotActive) {
    console.log(`enums::status: ${status}`);
}

// Literal Types or Enum?
// https://www.htmlgoodies.com/javascript/typescript-string-literals-vs-enums/
// https://blog.logrocket.com/typescript-string-enums-guide/

export { getNumberFromPosition, position };
export type { PositionLiteral, Square };
