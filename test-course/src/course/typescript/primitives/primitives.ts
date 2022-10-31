// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// https://www.tutorialsteacher.com/typescript/typescript-number
// https://www.tutorialsteacher.com/typescript/typescript-string
// https://www.tutorialsteacher.com/typescript/typescript-boolean
// https://www.tutorialsteacher.com/typescript/typescript-array
// https://www.tutorialsteacher.com/typescript/typescript-tuple
// https://www.tutorialsteacher.com/typescript/typescript-any

let name: string = "Simone";
let surname: string = "Di Luzio";
let age: number = 42;
// let delta: number = 1.2453;
let male: boolean = true;
// let documents: string[] = ["passaporto", "carta d'identità", "patente"];
let documents: Array<string> = ["passaporto", "carta d'identità", "patente"];
// Stop using ANY in typescript
// https://blog.devgenius.io/stop-using-any-in-typescript-24f5ead75ee0
// let bad: any = "Simone";
// let bad: any = 11;
// let bad: any = true;

// SPECIAL DATA TYPE

// https://www.tutorialsteacher.com/typescript/typescript-void
// https://www.tutorialsteacher.com/typescript/typescript-never

export { name, surname, age, male, documents };
