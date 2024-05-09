const { reverse, removeDuplicates } = require('./index');

describe('test all the functions', () => {
    describe("reverse", () => {
        test('hello equal to olleh', () => {
            expect(reverse("hello")).toBe("olleh");
        });

        test("should not return the non reverse string", () => {
            expect(reverse("hello")).not.toBe("hello");
        })
    })
    describe("removeDuplicates", () => {
        test('This is is a test test  string equal to This is a test  string', () => {
            expect(removeDuplicates("This is is a test test  string")).toBe("This is a test  string");
        });

        test("should not return duplicates string", () => {
            expect(removeDuplicates("hello hello")).not.toBe("hello hello");
        })
    })
});