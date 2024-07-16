import React from "react";
import styles from "./AnimeCard.module.css";

const maxLevel = 4;

const AnimeCard = ({
    levelData,
    setLevelsData,
    setStats,
    stats,
    currentLevel,
    setCurrentLevel,
}) => {
    const { animeName, rating, image } = levelData;

    function handleCardClick() {
        if (levelData.isSelected) {
            resetGame();
        } else {
            levelData.isSelected = true;
            setStats({ ...stats, score: stats.score + 1 });

            if (shouldLevelUp()) {
                if (currentLevel === maxLevel) {
                    playerWon();
                    return;
                }

                moveToNextLevel();
                return;
            }

            setLevelsData((prev) => [...prev]);
        }
    }

    function moveToNextLevel() {
        setCurrentLevel(currentLevel + 1);
        setStats({
            score: 0,
            currentLevel: currentLevel + 1,
        });
    }

    function playerWon() {
        alert("You Won! Yayyy");
        resetGame();
    }

    function shouldLevelUp() {
        return stats.score + 1 >= 2 ** currentLevel;
    }

    function resetGame() {
        setStats({ score: 0, currentLevel: 1 });
        setCurrentLevel(1);
    }

    return (
        <button onClick={handleCardClick} className={styles.animeCard}>
            <img
                className={styles.animeCard__img}
                src={image}
                alt={animeName}
            />
            <div className={styles.animeCard__stats}>
                <h2 className={styles.animeCard__title}>{animeName}</h2>
                <h4 className={styles.animeCard__rating}>Rating: {rating}</h4>
            </div>
        </button>
    );
};

export default AnimeCard;
