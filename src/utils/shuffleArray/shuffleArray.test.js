import { describe, it } from "vitest";
import { shuffleArray } from "./shuffleArray";

describe("Shuffle Array", () => {
    it("should shuffle the array", () => {
        const case1 = { array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] };

        expect(shuffleArray(case1.array)).not.toEqual(case1.array);
    });
});
