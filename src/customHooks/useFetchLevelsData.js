import { useEffect, useState } from "react";
import { fetchKitsuAnime } from "../api_calls";
import { getLevel } from "../levels";

export const useFetchLevelsData = () => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [levelsData, setLevelsData] = useState([]);

    useEffect(() => {
        const levels = getLevel(currentLevel);
        const controllerList = [];

        for (const level of levels) {
            const controller = new AbortController();
            controllerList.push(controller);

            fetchKitsuAnime(level.animeName, controller.signal)
                .then((response) => {
                    level.image = response.data[0].attributes.posterImage.small;
                    level.rating = response.data[0].attributes.averageRating;
                    level.isLoading = false;
                    setLevelsData([...levels]);
                })
                .catch((e) => {
                    console.log(
                        `${level.animeName} was not able to load due to: ${e}`
                    );
                    level.isLoading = false;
                    setLevelsData([...levels]);
                });
        }

        return () => {
            for (const controller of controllerList) {
                controller.abort(
                    "Level fetch request aborted due to component reload (will try again on component mount)"
                );
            }
        };
    }, [currentLevel]);

    return { currentLevel, setCurrentLevel, levelsData, setLevelsData };
};
