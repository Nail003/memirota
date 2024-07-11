import { describe } from "vitest";
import { createLevel } from "./createLevel";

describe("Create Level", () => {
    it("should create correct level json array", () => {
        const baseObject = {
            animeName: "",
            isSelected: false,
            image: "",
            rating: "nan",
            isLoading: true,
        };

        const case1 = {
            animeList: ["Naruto"],
            expected: [{ ...baseObject, animeName: "Naruto" }],
        };
        const case2 = {
            animeList: ["Naruto", "One Piece", "Cowboy Bebop"],
            expected: [
                { ...baseObject, animeName: "Naruto" },
                { ...baseObject, animeName: "One Piece" },
                { ...baseObject, animeName: "Cowboy Bebop" },
            ],
        };

        const result = createLevel(case1.animeList);
        const result2 = createLevel(case2.animeList);

        expect(result).toEqual(case1.expected);
        expect(result2).toEqual(case2.expected);
    });
});
