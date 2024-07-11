import { describe } from "vitest";
import { urlify } from "./urlify";

describe("URLify Test", () => {
    it("should urlify the given string", () => {
        const case1 = { string: "one piece", expected: "one%20piece" };
        const case2 = {
            string: "       one   piece      ",
            expected: "one%20piece",
        };
        const case3 = {
            string: "       oNe   PiECe      ",
            expected: "one%20piece",
        };

        expect(urlify(case1.string)).toBe(case1.expected);
        expect(urlify(case2.string)).toBe(case2.expected);
        expect(urlify(case3.string)).toBe(case3.expected);
    });
});
