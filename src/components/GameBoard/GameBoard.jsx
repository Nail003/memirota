import React, { useEffect } from "react";
import { AnimeCardContainer } from "../Containers";
import { useFetchLevelsData } from "../../customHooks";
import { shuffleArray } from "../../utils";

const GameBoard = (props) => {
    const { levelsData, setCurrentLevel, setLevelsData, currentLevel } =
        useFetchLevelsData();

    shuffleArray(levelsData);

    return (
        <>
            <AnimeCardContainer
                {...{
                    levelsData,
                    setLevelsData,
                    currentLevel,
                    setCurrentLevel,
                    ...props,
                }}
            />
        </>
    );
};

export default GameBoard;
