import { add, multiply, subtract } from "../src/typescript/service/operations";

describe("Add numbers", () => {
    test("Should add two numbers together, 1 + 1 = 2", () => {
        expect(add(1, 1)).toBe(2);
    });
});

describe("Subtract numbers one from another", () => {
    test("Should subtract two numbers, 2 - 1 = 1", () => {
        expect(subtract(2, 1)).toBe(1);
    });
    test("Should go in the negatives, 2 - 4 = -2", () => {
        expect(subtract(2, 4)).toBe(-2);
    });
});

describe("Multiply two numbers", () => {
    test("Should multiple two natural numbers, 2 * 2 = 4", () => {
        expect(multiply(2, 2)).toBe(4);
    });
    test("Should work with negative numbers, -2 * -2 = 4", () => {
        expect(multiply(-2, -2)).toBe(4);
    });
    test("Should work with positive and negative numbers, -2 * 3 = -6", () => {
        expect(multiply(-2, 3)).toBe(-6);
    });
});
