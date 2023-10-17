import { add, subtract } from "../src/typescript/service/operations";

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
