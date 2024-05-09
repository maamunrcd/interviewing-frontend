const { reverse, removeDuplicates, flatten } = require('./index');

describe('test all the functions', () => {
    describe('reverse function', () => {
        test('should reverse the string', () => {
            expect(reverse("hello")).toBe("olleh");
        });

        test('should handle empty string', () => {
            expect(reverse("")).toBe("");
        });

        test('should handle string with single character', () => {
            expect(reverse("a")).toBe("a");
        });

        test('should handle string with numbers and special characters', () => {
            expect(reverse("123!@#")).toBe("#@!321");
        });

        test('should not return the original string', () => {
            expect(reverse("hello")).not.toBe("hello");
        });
    });
    describe('removeDuplicates function', () => {
        test('should remove duplicate words from a string', () => {
            const inputString = "hello world world hello";
            const expectedOutput = "hello world";
            expect(removeDuplicates(inputString)).toEqual(expectedOutput);
        });

        test('should handle empty string', () => {
            const inputString = "";
            const expectedOutput = "";
            expect(removeDuplicates(inputString)).toEqual(expectedOutput);
        });

        test('should handle string with no duplicates', () => {
            const inputString = "apple banana orange";
            const expectedOutput = "apple banana orange";
            expect(removeDuplicates(inputString)).toEqual(expectedOutput);
        });

        test('should handle string with all duplicates', () => {
            const inputString = "hello hello hello";
            const expectedOutput = "hello";
            expect(removeDuplicates(inputString)).toEqual(expectedOutput);
        });
    });
    describe("flatten", () => {
        test('[1, [2, [3, 4], 5], 6] equal [1, 2, 3, 4, 5, 6] ', () => {
            const nestedArray = [1, [2, [3, 4], 5], 6];
            const expected = [1, 2, 3, 4, 5, 6];
            expect(flatten(nestedArray)).toEqual(expected);
        });
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