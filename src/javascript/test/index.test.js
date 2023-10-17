"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("../src/typescript");
describe("Initial test, should work as an example", () => {
    test("Should return a welcome message", () => {
        expect(typescript_1.message).toBe("Hello world");
    });
});
