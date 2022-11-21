// https://www.typescriptlang.org/docs/handbook/2/functions.html

// https://www.tutorialsteacher.com/typescript/typescript-function
// https://www.tutorialsteacher.com/typescript/arrow-function

const sum = (a: number, b?: number): number => {
    return b ? a + b : a;
};

interface ComponentProps {
    a: number;
    b: number;
    sum: () => number;
}

const component: ComponentProps = {
    a: 10,
    b: 5,
    sum: function (): number {
        return sum(this.a, this.b);
    }
};

console.log(`functions::component.sum: ${component.sum()}`);

export { component };
export type { ComponentProps };
