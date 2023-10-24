"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("Initial test, should work as an example", () => {
    test("Should return a welcome message", () => {
        expect(src_1.message).toBe("Hello world");
    });
});
