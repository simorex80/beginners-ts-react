// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

// https://www.typescripttutorial.net/typescript-tutorial/typescript-string-literal-types/

type PositionLiteral = "top" | "bottom" | "left" | "right";
type FirstTenNumbersLiteral = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type HeightLiteral = "-150cm" | "151-170cm" | 100;

const position: PositionLiteral = "top";
const number: FirstTenNumbersLiteral = 10;
const height: HeightLiteral = 100;

interface Square {
    position: PositionLiteral;
}

const square: Square = {
    position: "bottom"
};

export { position, number, height, square };
export type { PositionLiteral, FirstTenNumbersLiteral, HeightLiteral, Square };