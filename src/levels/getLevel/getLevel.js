import { createLevel } from "../createLevel/createLevel";
import { level1, level2, level3, level4 } from "../levels";

// For each new level add a test to check if the length of the level is correct
// Need to figure out a better way to test this function
export function getLevel(level) {
    switch (level) {
        case 1:
            return createLevel(level1);

        case 2:
            return createLevel(level2);

        case 3:
            return createLevel(level3);

        case 4:
            return createLevel(level4);

        default:
            return [];
    }
}
