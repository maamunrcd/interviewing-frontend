const { reverse } = require('./index');

describe('test all the functions', () => {
    describe("reverse", () => {
        test('hello equal to olleh', () => {
            expect(reverse("hello")).toBe("olleh");
        });

        test("should not return the non reverse string", () => {
            expect(reverse("hello")).not.toBe("hello");
        })
    })
});