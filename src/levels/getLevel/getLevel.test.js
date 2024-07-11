import { describe, expect } from "vitest";
import { getLevel } from "./getLevel";

describe("Get Level Test", () => {
    it("should return empty array in case of wrong input", () => {
        const case1 = { level: "wrong level", expected: [] };

        const result = getLevel(case1.level);

        expect(result).toEqual(case1.expected);
    });

    it("should return level array with correct level length", () => {
        const case1 = { level: 1, expected: 2 };
        const case2 = { level: 2, expected: 4 };

        expect(getLevel(case1.level).length).toBe(case1.expected);
        expect(getLevel(case2.level).length).toBe(case2.expected);
    });
});
