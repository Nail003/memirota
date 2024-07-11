import React from "react";
import styles from "./AnimeCard.module.css";

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
            setStats({ score: 0, currentLevel: 1 });
            setCurrentLevel(1);
        } else {
            levelData.isSelected = true;
            setStats({ ...stats, score: stats.score + 1 });

            if (stats.score + 1 >= 2 ** currentLevel) {
                if (currentLevel === 4) {
                    alert("You Won! Yayyy");
                    setCurrentLevel(1);
                    setStats({ score: 0, currentLevel: 1 });
                    return;
                }

                setCurrentLevel(currentLevel + 1);
                setStats({
                    score: 0,
                    currentLevel: currentLevel + 1,
                });
                return;
            }
            setLevelsData((prev) => [...prev]);
        }
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
