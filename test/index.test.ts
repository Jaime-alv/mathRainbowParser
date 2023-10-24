import { message } from "../src"

describe("Initial test, should work as an example", () => {
    test("Should return a welcome message", () => {
        expect(message).toBe("Hello world")
    })
})