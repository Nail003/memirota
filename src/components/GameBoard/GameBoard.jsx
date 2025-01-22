import React, { useState } from "react";
import { useFetchLevelsData } from "../../customHooks";
import { shuffleArray } from "../../utils";
import { AnimeCardContainer } from "../Containers";
import { MessageCard } from "../Cards";

const GameBoard = (props) => {
    const [showWinMessage, setShowWinMessage] = useState(false);
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
                    setShowWinMessage,
                    ...props,
                }}
            />
            {showWinMessage && (
                <MessageCard title="You Won!!!" showCard={setShowWinMessage}>
                    <h2 className="text-center">Congratulation you Won!!!</h2>
                    <br />
                    <p className="text-center">
                        - From now on you can call yourself a real weeb!
                    </p>
                    <p className="text-center">
                        (Game has been reset incase you wanna suffer again)
                    </p>
                </MessageCard>
            )}
        </>
    );
};

export default GameBoard;
