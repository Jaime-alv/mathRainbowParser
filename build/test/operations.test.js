"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operations_1 = require("../src/service/operations");
describe("Add numbers", () => {
    test("Should add two numbers together, 1 + 1 = 2", () => {
        expect((0, operations_1.add)(1, 1)).toBe(2);
    });
    test("Should work with floating numbers", () => {
        expect((0, operations_1.add)(1.45, 1.45)).toBe(2.9);
    });
});
describe("Subtract numbers one from another", () => {
    test("Should subtract two numbers, 2 - 1 = 1", () => {
        expect((0, operations_1.subtract)(2, 1)).toBe(1);
    });
    test("Should go in the negatives, 2 - 4 = -2", () => {
        expect((0, operations_1.subtract)(2, 4)).toBe(-2);
    });
    test("Should work with floating numbers", () => {
        expect((0, operations_1.subtract)(4, 2.4)).toBe(1.6);
    });
});
describe("Multiply two numbers", () => {
    test("Should multiple two natural numbers, 2 * 2 = 4", () => {
        expect((0, operations_1.multiply)(2, 2)).toBe(4);
    });
    test("Should work with negative numbers, -2 * -2 = 4", () => {
        expect((0, operations_1.multiply)(-2, -2)).toBe(4);
    });
    test("Should work with positive and negative numbers, -2 * 3 = -6", () => {
        expect((0, operations_1.multiply)(-2, 3)).toBe(-6);
    });
    test("Should work with floating numbers", () => {
        expect((0, operations_1.multiply)(1.1, 2)).toBe(2.2);
    });
});
describe("Divide two items", () => {
    test("Should divide two natural numbers", () => {
        expect((0, operations_1.divide)(4, 2)).toBe(2);
    });
    test("Should work with negative numbers", () => {
        expect((0, operations_1.divide)(4, -2)).toBe(-2);
    });
    test("Should work with floating numbers", () => {
        expect((0, operations_1.divide)(3, 1.5)).toBe(2);
    });
    test("Should work for periodic numbers", () => {
        expect((0, operations_1.divide)(2, 1.5)).toBe(1.3333333333);
    });
    test("Should render up to 10 decimals", () => {
        const periodicNumberDivision = (0, operations_1.divide)(2, 1.5).toString().split(".")[1].length;
        expect(periodicNumberDivision).toBe(10);
    });
});
