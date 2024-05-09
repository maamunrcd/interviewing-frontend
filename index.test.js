const { reverse, removeDuplicates, flatten } = require('./index');

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
    describe("flatten", () => {
        test('[1, [2, [3, 4], 5], 6] equal [1, 2, 3, 4, 5, 6] ', () => {
            const nestedArray = [1, [2, [3, 4], 5], 6];
            const expected = [1, 2, 3, 4, 5, 6];
            expect(flatten(nestedArray)).toEqual(expected);
        });

        // test('[1, 2, [4, 5]] equal [1, 2, 4, 5] ', () => {
        //     expect(flatten([1, 2, [4, 5]])).not.toBe([1, 2, [4, 5]]);
        // });
    })

    test('should handle an empty array', () => {
        const emptyArray = [];
        expect(flatten(emptyArray)).toEqual([]);
    });

    test('should handle a flat array', () => {
        const flatArray = [1, 2, 3, 4];
        expect(flatten(flatArray)).toEqual(flatArray);
    });

    test('should handle mixed array with non-array elements', () => {
        const mixedArray = [1, [2, 3], 4, [5, [6]], 7];
        const expected = [1, 2, 3, 4, 5, 6, 7];
        expect(flatten(mixedArray)).toEqual(expected);
    });
});