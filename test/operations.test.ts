import { add, multiply, subtract } from "../src/typescript/service/operations";

describe("Add numbers", () => {
    test("Should add two numbers together, 1 + 1 = 2", () => {
        expect(add(1, 1)).toBe(2);
    });
    test("Should work with floating numbers", () => {
        expect(add(1.45, 1.45)).toBe(2.9);
    });
});

describe("Subtract numbers one from another", () => {
    test("Should subtract two numbers, 2 - 1 = 1", () => {
        expect(subtract(2, 1)).toBe(1);
    });
    test("Should go in the negatives, 2 - 4 = -2", () => {
        expect(subtract(2, 4)).toBe(-2);
    });
    test("Should work with floating numbers", () => {
        expect(subtract(4, 2.4)).toBe(1.6);
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
    test("Should work with floating numbers", () => {
        expect(multiply(1.1, 2)).toBe(2.2);
    });
});
