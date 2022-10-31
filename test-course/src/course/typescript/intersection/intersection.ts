// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

// https://www.tutorialsteacher.com/typescript/typescript-union
// https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/

interface SimpleCar {
    hp: number;
    width?: number;
    height?: number;
    length?: number;
}

interface RacingCar extends SimpleCar {
    maxSpeed: number;
}

interface PickUp extends SimpleCar {
    liters: number;
}

// To union types, you use the | operator
// The typeAB defines a variable which can hold a value of either typeA or typeB.

type UnionCar = RacingCar | PickUp;

const racingCar: UnionCar = {
    hp: 800,
    maxSpeed: 400,
};

const pickUp: UnionCar = {
    hp: 800,
    liters: 40,
};

console.log(`types::racingCar.maxSpeed: ${racingCar.maxSpeed}`);
console.log(`types::pickUp.liters: ${pickUp.liters}`);

// To combine types, you use the & operator
// The typeAB will have all properties from both typeA and typeB.

type IntersectionCar = RacingCar & PickUp;

const monsterCar: IntersectionCar = {
    hp: 800,
    maxSpeed: 400,
    liters: 40,
};

console.log(`types::monsterCar.maxSpeed: ${monsterCar.maxSpeed}`);
console.log(`types::monsterCar.liters: ${monsterCar.liters}`);

export type { SimpleCar, RacingCar, PickUp };