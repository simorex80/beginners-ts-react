// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

// https://www.typescripttutorial.net/typescript-tutorial/typescript-string-literal-types/

type Position = "top" | "bottom" | "left" | "right";
type FirstTenNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Height = "-150cm" | "-151-170cm" | 100;

const position: Position = "top";
const number: FirstTenNumbers = 10;
const height: Height = 100;

interface Square {
    position: Position;
}

const square: Square = {
    position: "bottom"
};

export { position, number, height, square };
export type { Position, FirstTenNumbers, Height, Square };